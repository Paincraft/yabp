import { Kernel } from "inversify";
import { CorsDao } from "./entities/corsDao";
import { Cors } from "./entities/cors";
require("reflect-metadata");

var kernel = new Kernel();
kernel.bind<ICorsDao>("ICorsDao").to(CorsDao).inSingletonScope();
kernel.bind<ICors>("ICors").to(Cors).inSingletonScope();

export default kernel;
