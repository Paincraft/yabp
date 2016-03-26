/// <reference path="./typings/tsd.d.ts" />
/// <reference path="../common/models/yabp.blog.models.ts"/>

//ts imports
import {YabpConfig} from './modules/config/config';
import databaseSetup = require('./modules/db/databaseSetup.ts')

//nodejs imports
var cors = require('koa-cors');
var router = require('koa-router');
var yabpConfig:IYabpConfigData = YabpConfig.getInstance().getConfig();
var model = require('./oauth.model');
var mount = require('koa-mount');
var oauthserver = require('koa-oauth-server');
var bodyparser = require('koa-bodyparser');
var koa = require('koa');
//console.log(YabpConfig.getInstance());
//console.log(yabpConfig);
var yabpServer = new koa();

yabpServer.oauth = oauthserver({
  model: model,
  grants: ['password'],
  debug: true
});

var mainRouter = new router();
var oauthRouter = new router();

oauthRouter
  .post('/token', yabpServer.oauth.grant())

mainRouter
  .get("/REST/config/isConfigured", function* (next){
    this.statusCode = 200;
    //console.log(this.request.headers)
    this.body = { isConfigured : true };
    yield next;
  })

//yabpConfig.checkAllowOrigin()
yabpServer
  .use(cors({origin: yabpConfig.cors.checkAllowOrigin.bind(yabpConfig.cors)}))
  .use(bodyparser())
  .use(mount('/oauth2', oauthRouter.middleware()))
  .use(mainRouter.routes())
  .use(mainRouter.allowedMethods());
yabpServer.listen(1988);
