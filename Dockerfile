FROM node:12-alpine
WORKDIR /client-management-software
EXPOSE 3001
COPY . .
run yarn add nodemon --dev
run yarn
CMD ["yarn", "start"]