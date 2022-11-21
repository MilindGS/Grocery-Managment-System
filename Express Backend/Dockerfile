# FROM node

# # used to set the current directory
# WORKDIR /myapp

# # copy everything from current directory to the image
# COPY . .

# # expose the required port
# EXPOSE 4000

# # run this command immediately after a container gets created
# CMD node server.js

#---------------------------------------------------------#

FROM node:9-slim

WORKDIR /myapp

COPY package.json /myapp

RUN npm install 

COPY . /myapp

EXPOSE 4000

CMD ["npm","start"]
#---------------------------------------------------------#

# FROM node:16

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 4000
# CMD [ "node", "server.js" ]

