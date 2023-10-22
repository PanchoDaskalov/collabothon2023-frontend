# Use the official Node.js image as the base image with the desired version
FROM node:18.18.2

# Set the working directory
WORKDIR /src/app

# Install the Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install Node.js dependencies
RUN npm install

# Copy the entire application code to the working directory
COPY . .

# Copy Angular workspace configuration files
COPY tsconfig.json .
COPY tsconfig.app.json .

# Build the Angular project for production
RUN ng build --configuration=development