# Base image (node app so base img with node needed)
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Nodemon for recognizing data changes between windows and linux (in react hot reload did not work)
# Global installation needed
RUN npm install nodemon -g

# copying package.json AND package-lock.json
COPY package*.json ./


RUN npm install

# Bundle app source
COPY . .

# Port
EXPOSE 3001

# Running dev script if container starts
CMD ["npm", "run", "dev"]