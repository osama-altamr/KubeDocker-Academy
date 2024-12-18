FROM node:20 as base
WORKDIR /app
COPY package.json .

FROM base as dev
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start-dev"]

FROM base as prod
RUN npm install --only=production
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
