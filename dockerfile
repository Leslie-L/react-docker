FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

USER app


RUN npm install


COPY . .


EXPOSE 5173


CMD npm run dev