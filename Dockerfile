FROM node:10.4.0-alpine

#
WORKDIR /www

# Install app dependencies
COPY package.json yarn.lock ./

#
RUN yarn install --pure-lockfile

# Copy app source
COPY . .

# Build
RUN yarn build

#
WORKDIR /www/dist

# set your port
ENV PORT 8080

# expose the port to outside world
EXPOSE  8080

# start command as per package.json
CMD ["node", "index.js"]
