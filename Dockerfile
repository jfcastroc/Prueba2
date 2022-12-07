# Traemos la imagen base
FROM node:alpine
# indicamos el directorio en el que trabajaremos
WORKDIR /app
# añadimos`/app/node_modules/.bin` al $PATH
ENV PATH /app/node_modules/.bin:$PATH
# instalamos las dependencias de la app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# añadimos la app
COPY . ./
# iniciamos la app
CMD ["npm", "start"]