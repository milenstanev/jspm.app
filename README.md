# jspm.app

JSPM/SystemJS AngularJS application with lazy-loaded feature modules and a production bundle flow.

## Architecture

- The app entry is `src/index.js`.
- Routing and lazy loading are configured in `src/futureRoutes.js`.
- Each route `src` in `futureRoutes` is a stable module ID (`homeComponent`, `counterComponent`, `timerComponent`, `notesComponent`), not a local file path.
- The route IDs are resolved through `config.js` `paths` and `map`, so development and production use the same logical module names.

## Git Submodules and Packages

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

This keeps module imports package-oriented while still allowing local submodule iteration.

`src/angular.test-module` remains a shared testing package and is not exposed as a runtime navigation route.

`src/angular.template` is the starter package used to create new features/modules with a consistent structure (module, controller, template, and root registration).

## Build Modes

### Development

- Uses `jspm_packages/system.js` + `config.js`.
- Loads app with `SystemJS.import('./src/index.js')`.
- Keeps default JSPM behavior (`defaultJSExtensions: true`, Babel transpiler enabled).

Run:

```bash
npx gulp dev
node util/start.js
```

### Production

- Builds a shared vendor bundle: `dist/core.bundle.js` (`angular-core` and its dependencies).
- Builds the app shell: `dist/app.bundle.js` (`src/index.js`, lazyload-router, routes; excludes vendor and lazy route modules).
- Builds one lazy chunk per route: `dist/home.bundle.js`, `dist/counter.bundle.js`, `dist/timer.bundle.js`, `dist/notes.bundle.js`.
- Generates `dist/prod-bundle-overrides.js` with SystemJS `bundles` mapping so `System.import('homeComponent')` fetches the matching chunk on navigation.
- Disables in-browser transpilation in prod (`transpiler: false`, `defaultJSExtensions: false`).
- Loads `config.js` for base JSPM mapping, then prod overrides, then `core.bundle.js` + `app.bundle.js`, then imports `./src/index.js`.

Run:

```bash
npx gulp prod
node util/start.js
```

## Why route IDs stay as names

The lazyload-router expects module IDs. Using names (`homeComponent`, etc.) keeps routes decoupled from file layout and aligned with package-style resolution. It also matches how external submodule packages are consumed.

## Tests

### Smoke tests

```bash
node scripts/test.js
```

### E2E tests

```bash
npx playwright test
```
