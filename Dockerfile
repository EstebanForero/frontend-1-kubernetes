FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install

COPY . .

RUN bun run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENV VITE_BACKEND_URL=OVERRIDE_BACKEND_URL

EXPOSE 80

CMD ["/entrypoint.sh"]
