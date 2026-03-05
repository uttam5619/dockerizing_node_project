FROM node:latest

WORKDIR /test/app

COPY package*.json server/

WORKDIR /test/app/server

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]