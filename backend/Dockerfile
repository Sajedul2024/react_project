FROM node:16-alpine

WORKDIR /app2

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node","index.js" ]