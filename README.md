# jspm.app

JSPM 0.16 / SystemJS AngularJS 1.x application with lazy-loaded feature modules and a production bundle flow.

## Getting started

Requirements: Node `24.x` (see `engines` in `package.json`) and git.

```bash
git clone --recurse-submodules https://github.com/milenstanev/jspm.app.git
cd jspm.app

npm install            # installs node_modules (gulp, jspm, browser-sync, ...)
npm run postinstall    # installs jspm_packages + writes config.js (see below)
npm run start:dev      # dev server on http://localhost:3000
```

### Why `postinstall` must run before `start:dev`

The browser app does not run from `node_modules`. It runs from `jspm_packages/` and `config.js`, and **both are gitignored**, so a fresh clone has neither. `npm install` normally triggers `postinstall` automatically. Run it again by hand with `npm run postinstall` if it was skipped (`--ignore-scripts`, `npm ci` in some setups), failed (usually GitHub rate limiting), or `jspm_packages/` / `config.js` got deleted.

`postinstall` runs four steps in order:

| Step | Script | What it does |
|---|---|---|
| 1 | `scripts/configure-jspm-github-auth.js` | If `JSPM_GITHUB_AUTH_TOKEN`, `GITHUB_TOKEN` or `GH_TOKEN` is set, stores it as jspm's GitHub registry auth. Without a token it only warns, and jspm may hit GitHub rate limits |
| 2 | `jspm install -y` | Downloads the `jspm.dependencies` from `package.json` into `jspm_packages/` and generates `config.js` (SystemJS paths/map) |
| 3 | `scripts/ensure-feature-module-paths.js` | Adds the feature aliases (`homeComponent` → `src/home/home.module.js`, ...) into `config.js`, since jspm does not know about them |
| 4 | `scripts/patch-lazyload-router.js` | Re-applies two fixes to the installed `jspm.angular.lazyload-router` bundle (missing `break` in its `switch`, and `.default` / `__esModule` handling) |

If step 2 fails with rate-limit errors, export a GitHub token and run it again:

```bash
export GITHUB_TOKEN=<your token>
npm run postinstall
```

### Scripts

| Command | Purpose |
|---|---|
| `npm run start:dev` | `gulp dev` (switches `index.html` to the dev script block) + BrowserSync on port 3000 (`BROWSERSYNC_PORT` to change). Reloads on changes in `src/` |
| `npm run start:dev:node` | Same, but calls gulp through `node` (use it when the `gulp` binary is not found) |
| `npm run start:prod` | `gulp prod` (builds bundles, switches `index.html` to the prod block) + BrowserSync |
| `npm run build:vercel` | Production build copied into `public/` for deployment |
| `npm test` | Unit tests + smoke tests (`scripts/test.js`, which runs a prod build and then restores dev mode) |
| `npm run test:e2e` | Playwright E2E tests (`e2e/`) |

> `gulp dev` / `gulp prod` **rewrite `index.html`** by commenting the `<!-- dev -->` or `<!-- !dev -->` script block in or out. If the page loads bundles you didn't expect, run the mode you want again.

## Architecture

```
index.html ── navbar links + <div ui-view>
   │
   └─ SystemJS.import('src/index.js')                    app shell
        ├─ angular-core        → Angular, ui-router, shared CoreModule
        ├─ featureRoutes       → lazyload-router (ui-router "future states")
        └─ src/lazyRoutes.js → [{ stateName, urlPrefix, src: 'xxxComponent', ... }]
                                   │  first navigation to /xxx
                                   ▼
                     System.import('xxxComponent')   ← logical id, not a file path
                                   │  resolved by config.js "paths"
                                   ▼
                     src/xxx/xxx.module.js → angular.module('app.xxx'), real state + component
```

- The app entry is `src/index.js`. It creates the `app` module, registers `lazyRoutes` with the lazy-load router, sets the default view (the first route) and a `404` state, then bootstraps Angular on `document.body`.
- Each route `src` in `lazyRoutes` is a stable module ID (`homeComponent`, `counterComponent`, `timerComponent`, `notesComponent`), not a local file path. `config.js` `paths` resolves the IDs, so development and production use the same logical module names.
- The lazyload-router expects module IDs. Using names keeps routes decoupled from file layout and matches how external submodule packages are consumed.

### Feature structure

Every feature is a folder under `src/` with the same three files (`src/counter` is the smallest example):

| File | Content |
|---|---|
| `xxx.module.js` | `angular.module('app.xxx', [CoreModule])`, `$stateProvider.state('xxx', { url: '/xxx', component: 'appXxx' })`, `.component('appXxx', XxxComponent)` |
| `xxx.component.js` | Controller class extending `CtrlBase` (`src/lib/asd.js`) with `$inject`, and the template imported with `'./xxx.html!text'` |
| `xxx.html` | Bootstrap 3 panel template, using `$ctrl` |

The `home` feature is a schema-driven user form. It loads `/api/users/schema` and `/api/users` from `https://schema-ui-mf-remote.vercel.app`, builds the record from the schema (`materializeRecord.js`), and syncs with a desktop host through `window.desktopUi` (`desktop-ui-guest.js`, events `userUpdated` / `dashboardSync`).

### Adding a new feature

The feature list is currently repeated in several places, and they all have to agree. For a feature called `profile`:

1. Create `src/profile/` with `profile.module.js`, `profile.component.js`, `profile.html`. Copy `src/counter` as the starting point.
2. `src/lazyRoutes.js`: add
   ```js
   {
     stateName: 'profile',
     urlPrefix: '/profile',
     type: 'load',
     src: 'profileComponent',
     moduleExport: 'module:name:constant',
     moduleExportName: 'app.profile',
   }
   ```
3. `config.js` `paths`: `"profileComponent": "src/profile/profile.module.js"`.
4. `scripts/ensure-feature-module-paths.js` `FEATURE_PATHS`: the same entry (`config.js` is gitignored, and this restores it after `jspm install`).
5. `util/gulp/gulp-dev.js` `LAZY_ROUTE_MODULE_PATHS`: the same entry, so prod builds `dist/profile.bundle.js`.
6. `scripts/build-vercel.js` `requiredDist`: add `'profile.bundle.js'`.
7. `index.html` navbar: `<li><a href="#!/profile">Profile</a></li>`.
8. Tests: add `'profile'` to the chunk list in `scripts/test.js`, and a navigation check in `e2e/app.spec.js`.

Rules that must hold:

- `stateName` / `urlPrefix` in `lazyRoutes` must match the state name / URL registered in the module.
- `moduleExportName` must equal the `angular.module(...)` name.
- The module ID must end in `Component`. The build derives the chunk file name from it (`profileComponent` → `dist/profile.bundle.js`).

Then run `npm test`, and for deployment `npm run build:vercel` and commit `public/`.

## Project layout

```
index.html                 dev/prod entry page (script blocks switched by gulp)
config.js                  SystemJS config, generated by jspm (gitignored)
jspm_packages/             browser dependencies, installed by jspm (gitignored)
src/index.js               app shell
src/lazyRoutes.js        lazy route definitions
src/<feature>/             home, counter, timer, notes
src/lib/asd.js             CtrlBase
src/angular.*              git submodules of the shared packages
util/gulp/                 gulp dev/prod tasks and prod bundling
util/browserSync/          dev server
scripts/                   postinstall helpers, Vercel build, smoke tests
e2e/                       Playwright tests
public/                    committed static build served by Vercel
```

## Git submodules and packages

Submodules are used for local development of shared packages, but the app consumes them as JSPM packages/module IDs.

Configured submodules:

- `src/angular.core`
- `src/angular.lazyload-router`
- `src/angular.template`
- `src/angular.test-module`

Key package mappings in `config.js`:

- `angular-core` -> `github:milenstanev/mstanev.angular.1.x.x.core@0.0.5`
- `featureRoutes` -> `github:milenstanev/jspm.angular.lazyload-router@master`
- `homeComponent`, `counterComponent`, `timerComponent`, `notesComponent` -> local module IDs for app feature entry modules

This keeps module imports package-oriented while still allowing local submodule iteration. Changing a submodule does **not** change the app until the package is published and reinstalled with jspm.

`src/angular.test-module` is a shared testing package and is not exposed as a runtime navigation route.

`src/angular.template` is the starter package for new features/modules (module, controller, template, and root registration). Its copy is older than the app's features, so `src/counter` is the more reliable template.

## Build modes

### Development

- Uses `jspm_packages/system.js` + `config.js`.
- Loads the app with `SystemJS.import('src/index.js')`.
- Keeps default JSPM behavior (`defaultJSExtensions: true`, Babel transpiles in the browser).

```bash
npm run start:dev
```

### Production

- Builds a shared vendor bundle: `dist/core.bundle.js` (`angular-core` and its dependencies).
- Builds the app shell: `dist/app.bundle.js` (`src/index.js`, lazyload-router, routes; excludes vendor and lazy route modules).
- Builds one lazy chunk per route: `dist/home.bundle.js`, `dist/counter.bundle.js`, `dist/timer.bundle.js`, `dist/notes.bundle.js`.
- Generates `dist/prod-bundle-overrides.js` with a SystemJS `bundles` mapping, so `System.import('homeComponent')` fetches the matching chunk on navigation.
- Loads `config.js` for base JSPM mapping, then the prod overrides, then `core.bundle.js` + `app.bundle.js`, then imports `src/index.js`.

```bash
npm run start:prod
```

## Tests

```bash
npm test               # unit + smoke tests (includes a prod build)
npm run test:e2e       # Playwright
```

## Vercel deployment

This app deploys as a **static site** from the committed `public/` folder.

`vercel.json` must keep `installCommand` and `buildCommand` as empty strings (`""`, not `null`). GitHub/GitLab CI run `vercel deploy` of that folder. A remote `jspm install` / `gulp prod` on Vercel hits GitHub rate limits.

Prod boots `SystemJS.import('src/index.js')` (the id registered in `app.bundle.js`). Do not import `./src/index.js`, because Vercel would fetch a URL and the SPA rewrite can return HTML. See `.cursor/rules/jspm-vercel-prod.mdc` for the full list of things that must not regress.

### Build locally, then commit `public/`

```bash
npm run build:vercel
git add public
git commit -m "Refresh Vercel public build"
git push
```

### Linked project

- Project: `jspm-app`
- Team: `milenstanev-9298s-projects`
- Production URL: https://jspm-app-milenstanev-9298s-projects.vercel.app
- Branch alias: https://jspm-app-git-feature-rebuild-milenstanev-9298s-projects.vercel.app
