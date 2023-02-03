FROM node:16.13.0
WORKDIR /app
COPY package.json .
RUN npm i --force
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 3000
CMD ["npm", "run", "serve"]
