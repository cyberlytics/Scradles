FROM node:16

WORKDIR /usr/src/app

RUN npm install nodemon -g

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]