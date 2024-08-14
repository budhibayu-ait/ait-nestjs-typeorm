# Base image
FROM node:22

# Create app directory
WORKDIR /auth

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY auth/package*.json ./
COPY auth/tsconfig*.json ./
COPY auth/nest-cli*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 4000
#CMD npm run start:prod

# Start the server using the production build
 CMD ["npm", "run", "start:prod"]