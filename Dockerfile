FROM node:6
WORKDIR /usr/local/app
RUN npm i -g jspm
#=== local tools ===#
#RUN apt-get update
#RUN apt-get install nano
#RUN npm install
#COPY ./ /usr/local/app
#RUN npm run start:dev
