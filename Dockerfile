FROM node:18-alpine

WORKDIR /code

COPY package*.json ./
COPY tsconfig.json ./
COPY ./src ./src
COPY ./db ./db

RUN npm install --only=production
RUN npm install --only=development

ENV NODE_ENV development

RUN npm run build
COPY ./.env ./dist

CMD ["sh", "-c", "npm run start"]