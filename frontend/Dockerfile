FROM node:10-alpine as builder

WORKDIR /app2

COPY package.json .

RUN npm install

COPY . .


RUN npm run build

FROM nginx:alpine

COPY --from=builder /app2/build  /usr/shared/nginx/html

COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]