FROM node:18

WORKDIR /app

COPY package*.json /app
RUN npm ci

COPY . /app

EXPOSE 8080
CMD [ "node", "index.js"]