FROM node:latest as build-stage
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
RUN npm run build ui-admin --prod

FROM nginx:latest as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist/apps/ui/admin /app
COPY apps/ui/admin/nginx.conf /etc/nginx/nginx.conf