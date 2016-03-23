/// <reference path="../../typings/tsd.d.ts" />

"use strict";
import fs = require('fs');
import _ = require('lodash');
import koa = require('koa');

var wildcard = require('wildcard');

class Cors{
  private _cors:any;

  constructor(){
    this._cors = (function(){
      try{
        return JSON.parse(fs.readFileSync(__dirname + '/cors.json', 'utf8'));
      }catch(e){
        console.log(e);
        return {};
      }
    })();
  }

  public checkAllowOrigin(request:koa.Request):string{
    /*return _.pick(this.cors,function(val,key){
      return val === domain ? key : '';
    })*/
    var result:string = '';
    var BreakException:Object = {};
    var allowedList:string[] = this._cors.allow;
    try{
      allowedList.forEach((allwedWildcard) => {
          var regex = allwedWildcard.replace(/\*/g, "[^ ]*");
          if(request.headers.origin.match(regex)){
            result = request.headers.origin;
            throw BreakException;
          }
      });
    }catch(e) {
      if (e!==BreakException) throw e;
    }

    console.log(result);
    return result;
  }

  public getCors():Object{
    return this._cors;
  }

}

var cors = new Cors();
module.exports = cors;
