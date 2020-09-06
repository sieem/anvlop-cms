FROM node:latest as build-stage
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build ui-static -- --prod

FROM nginx:latest as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist/apps/ui/static /app
COPY apps/ui/static/nginx.conf /etc/nginx/nginx.conf