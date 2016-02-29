/// <reference path="../../../common/models/yabp.config.models.ts"/>

export class YabpConfig implements IYabpConfig{
  private YabpConfigData: IYabpConfigData;
  constructor(){

  }

  getConfig(){
    return this.YabpConfigData;
  }

  setProperty(namespace:string,property:string, value:string){
    return true;
  }

  isConfigured(){
    return true;
  }
}
