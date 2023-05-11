FROM node:14-alpine as build-step

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/superheroes /usr/share/nginx/html

EXPOSE 80