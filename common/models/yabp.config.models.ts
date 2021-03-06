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
}

interface IYabpConfig{
  getConfig():IYabpConfigData;
  setProperty(namespace:string,property:string, value:string):boolean;
  isConfigured():boolean;
}
