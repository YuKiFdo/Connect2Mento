# Use the official Node.js image as the base
FROM node:22-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Serve the application
FROM node:22-alpine as serve

# Set the working directory for serving
WORKDIR /app

# Copy the built files from the previous build stage
COPY --from=build /app/dist ./dist

# Install serve to serve static files
RUN npm install -g serve

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "3000"]
