/// <reference path="./typings/tsd.d.ts" />
/// <reference path="../common/models/yabp.blog.models.ts"/>

import {YabpConfig} from './modules/config/config';
import databaseSetup = require('./modules/db/databaseSetup.ts')

import koa = require('koa');
var cors = require('koa-cors');
var router = require('koa-router')();
var yabpConfig:IYabpConfigData = YabpConfig.getInstance().getConfig();
var yabpServer = new koa();

//console.log(YabpConfig.getInstance());
//console.log(yabpConfig);

router
  .get("/REST/config/isConfigured", function* (next){
    this.statusCode = 200;
    //console.log(this.request.headers)
    this.body = { isConfigured : true };
    yield next;
  })

//yabpConfig.checkAllowOrigin()
yabpServer.use(cors({origin: yabpConfig.cors.checkAllowOrigin.bind(yabpConfig.cors)})).use(router.routes()).use(router.allowedMethods());
yabpServer.listen(1988);
