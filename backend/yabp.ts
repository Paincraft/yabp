/// <reference path="./d.ts/node.d.ts" />
/// <reference path="./d.ts/koa.d.ts" />

import {YabpConfig} from './modules/config/config.ts';

import databaseSetup = require('./modules/db/databaseSetup.ts')
import koa = require('koa');
//import System = require('systemjs');

var router = require('koa-router')();
var yabpServer = new koa();

router
  .get("/REST/config/isConfigured", function* (next){
    this.statusCode = 200;
    this.set('Access-Control-Allow-Origin','http://localhost:9000')
    this.body = { isConfigured : false };
  })

yabpServer.use(router.routes()).use(router.allowedMethods());
yabpServer.listen(1988);
