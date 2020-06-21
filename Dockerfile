FROM node:current-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3000
CMD [ "node", "src/server.js" ]