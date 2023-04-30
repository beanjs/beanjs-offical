FROM node:16-alpine as builder

WORKDIR /node/src
COPY . .
RUN yarn install --registry https://registry.npm.taobao.org --verbose && yarn run build

FROM node:16-alpine

WORKDIR /node/app
COPY --from=builder /node/src/.output .
EXPOSE 3000
ENTRYPOINT [ "node","./server/index.mjs" ]
