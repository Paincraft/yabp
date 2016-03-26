import fs = require('fs');

export class CorsDao implements ICorsDao{
  public getAllowedWildcardList():string[]{
    try{
      return JSON.parse(fs.readFileSync(__dirname + '/cors.json', 'utf8'));
    }catch(e){
      console.log(e);
      return [];
    }
  }
}
