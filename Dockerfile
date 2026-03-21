# ---- Build Stage ----
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Production Stage ----
FROM node:22-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN apk add --no-cache bash && npm ci --omit=dev --ignore-scripts

COPY --from=builder /app/dist ./dist
COPY views/ ./views/

# add wait for it script and run with + x 
COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

EXPOSE 5501

# Start the application

ENTRYPOINT [ "wait-for-it.sh", "blog-db:3306", "--"]
CMD ["node", "dist/server.js"]
