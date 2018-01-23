FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/

#RUN cd /usr/src/app/
RUN npm install
RUN node --version

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
