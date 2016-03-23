/// <reference path="../../../common/models/yabp.config.models.ts"/>

var cors = require('./cors');

export class YabpConfig implements IYabpConfig{

  private YabpConfigData: IYabpConfigData;
  private static _instance:IYabpConfig = new YabpConfig();

  constructor(){
    if(YabpConfig._instance){
      throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.");
    }

    this.YabpConfigData = {
      db: {
        port:0,
        url: '',
        databaseName: ''
      },
      server: {
        port:0
      },
      cors: cors
    }
    YabpConfig._instance = this;
  }

  public static getInstance():IYabpConfig
  {
    return YabpConfig._instance;
  }

  public getConfig():IYabpConfigData{
    return this.YabpConfigData;
  }

  public setProperty(namespace:string,property:string, value:string):Boolean{
    return true;
  }

  public isConfigured():Boolean{
    return true;
  }

}
