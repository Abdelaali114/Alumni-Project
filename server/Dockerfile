FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for dependency caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 3001

# Start the app
CMD ["npm", "run", "start"]
