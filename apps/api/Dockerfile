FROM node:12.13-alpine As development
WORKDIR /app
COPY . .
RUN npm install --only=production
RUN npm run build api -- --prod

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json .
RUN npm install --only=production

COPY --from=development /app/dist/apps/api /app

CMD ["node", "main"]