FROM node:20.11

WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN npm run build
CMD ["npm", "start"]

