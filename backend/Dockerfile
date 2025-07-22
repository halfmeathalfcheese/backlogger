# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your backend code
COPY . .

# Expose the port your server runs on (change if needed)
EXPOSE 3001

# Default command (change to your main file if needed)
CMD ["node", "server.js"]