#
# Angular CLI
# For developing angular application
# docker compose run --rm cv ng new --directory=./ --skip-install --skip-git --style=scss --routing=true --no-interactive --defaults cv
#
FROM node:24-alpine

ARG UID=1000
ARG GID=1000
ENV UID=${UID}
ENV GID=${GID}
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN apk add --no-cache ca-certificates unzip git shadow chromium nss chromium-chromedriver \
    && usermod -u $UID node && groupmod -g $GID node \
    && mkdir /home/node/logs \
    && mkdir /home/node/app \
    && mkdir /home/node/.npm \
    && mkdir /home/node/.config \
    && chown -R node:node /home/node \
    && npm i -g npm \
    && npm install -g @angular/cli \
    && npm cache clean --force

WORKDIR /home/node/app

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_DRIVER=/usr/bin/chromedriver

EXPOSE 4200

USER node

CMD ["sh", "-c", "npm install && ng serve --host 0.0.0.0 --poll 2000"]
