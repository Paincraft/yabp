/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../models/config.models.ts"/>
import { inject } from "inversify";
require("reflect-metadata");

"use strict";

@inject('ICorsDao')
export  class Cors implements ICors{
    private _corsDao:ICorsDao;
    private _cors:any;

    constructor(CorsDao:ICorsDao){
      this._corsDao = CorsDao;
      this._cors = CorsDao.getAllowedWildcardList();
      /*(function(){
        try{
          return JSON.parse(fs.readFileSync(__dirname + '/data/cors.json', 'utf8'));
        }catch(e){
          console.log(e);
          return {};
        }
      })();*/
    }

    public checkAllowOrigin(request):string{
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
