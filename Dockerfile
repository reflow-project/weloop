# Build stage - prepare the React application
FROM node:alpine as build-stage
WORKDIR /app
#RUN apk add --update py-pip && pip install -U pip && pip install transifex-client
# optimise layer caching:
COPY package*.json ./ 
COPY yarn.lock ./ 
RUN yarn
COPY . .
# RUN yarn add-locale en_GB
# RUN yarn extract
# RUN yarn compile
RUN yarn build --prod

# Production stage - Caddy web server serving static files
FROM caddy:alpine as production-stage
COPY --from=build-stage /app/build /frontend
EXPOSE 80
EXPOSE 443
