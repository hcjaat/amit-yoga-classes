FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN corepack prepare pnpm@10.17.0 --activate

RUN pnpm install --frozen-lockfile --ignore-scripts=false

COPY . .

RUN pnpm run build

FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
