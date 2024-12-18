# Usar la imagen oficial de Node.js versión 20.12.2 como base
FROM node:20.12.2

# Crear un directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto en el que corre la aplicación
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
