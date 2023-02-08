FROM node:18

# Create directory for application
WORKDIR /data/torchapi

# Install dependencies
COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "src" ]