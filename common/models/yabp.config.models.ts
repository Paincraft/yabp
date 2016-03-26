/// <reference path="../../backend/modules/config/models/config.models.ts"/>
interface IYabpDbConfig{
	url: string;
	port: number;
	databaseName: string;
}

interface IYabpServerConfig{
	port:number;
}

interface IYabpConfigData {
	db:IYabpDbConfig;
	server:IYabpServerConfig;
	cors?:ICors;
}

interface IYabpConfig{
  getConfig():IYabpConfigData;
  setProperty(namespace:string,property:string, value:string):Boolean;
  isConfigured():Boolean;
}
