# ---------- Builder ----------
FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

# Allow sharp to run install scripts
ENV PNPM_BUILD_POLICY=allow
RUN pnpm config set onlyBuiltDependencies sharp

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# ---------- Runtime ----------
FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
