FROM node:6
WORKDIR /usr/local/app
#=== local tools ===#
RUN apt-get update
RUN apt-get install nano
RUN npm install
COPY ./ /usr/local/app
RUN npm start
