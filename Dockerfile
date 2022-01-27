FROM node
# RUN npm install -g nodemon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn install

# Copy the rest of source code
COPY . ./

RUN rm -rf ./dist
# Create an user
# USER node

RUN yarn build

# Expose port
EXPOSE 4001

# Run commands
# CMD ["node","dist/src/app.js"]
CMD ["yarn","dev"]
