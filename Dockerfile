FROM node:7.7.2-alpine
LABEL authors="RT"

#Angular CLI
RUN npm install -g @angular/cli@1.6.7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
COPY /src/server /app
RUN npm install 
RUN ng build --prod
WORKDIR /app/dist
CMD [ "node", "index.js" ]
EXPOSE 8080

