FROM node:18.19.1-slim

WORKDIR /usr/src/app

COPY backend/package*.json ./
RUN npm install

COPY backend .

EXPOSE 3000

CMD ["node", "index.js"]
