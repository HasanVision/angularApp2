# Use the official Node.js image as the base
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the built files from the previous step
# Copy the built files from the previous step
COPY --from=build /app/dist/postage-stamps /usr/share/nginx/html

# Expose the default port
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]