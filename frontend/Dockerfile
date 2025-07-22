# Use Node.js
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose React Dev Server port
EXPOSE 3000

# Start React in development mode
CMD ["npm", "start"]