FROM node:10-alpine
WORKDIR /home/diksha/node-easy-notes-app
COPY ./package.json ./ 
RUN npm install
RUN ls 
ENTRYPOINT node server.js
EXPOSE 3000

