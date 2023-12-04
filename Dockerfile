# FROM node:18-alpine

# WORKDIR /app

# COPY package.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# CMD ["npm", "run", "dev-watch"]


FROM node:18.16-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev-watch"]