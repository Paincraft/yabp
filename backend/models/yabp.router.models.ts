interface Route{
  path:string;
  name:string;
  parameters:string[];
}

interface Routes extends Array<Route>{};
