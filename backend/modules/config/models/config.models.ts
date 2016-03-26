/// <reference path="../../../typings/tsd.d.ts" />

interface ICorsDao{
  getAllowedWildcardList():string[];
}

interface ICors{
  checkAllowOrigin(request:any):string;
}
