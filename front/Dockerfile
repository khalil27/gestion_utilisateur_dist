# Stage 1: Build the Angular application
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (adjust the output path if needed)
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist/front /usr/share/nginx/html

# Expose port 4200
EXPOSE 4200

# Configure Nginx to listen on the proper port
RUN sed -i.bak 's/listen\(.*\)80;/listen 4200;/' /etc/nginx/conf.d/default.conf