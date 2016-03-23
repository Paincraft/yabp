/// <reference path="../../../common/models/yabp.blog.models.ts"/>

import mongo = require('mongoose');
import assert = require('assert');

function setupDB(config){
  // Connection URL
  var url = `mongodb://${config.url}:${config.port}/${config.database}`;
  var posts;
  // Use connect method to connect to the Server
  var exaplePost:Post = {
    title : 'Title',
    subtitle : 'Subtitle',
    creationDate : new Date(),
    body : 'hello world',
    author : 'yabp',
    history : [],
    comments : [],
    categories : [""],
    tags : [""],
  }
};
/*  MongoClient.connect(url, (err, db) => {
    if(err) console.log(err);
    console.log("Connected correctly to server");
    posts = db.collection('posts');
    posts.insert(exaplePost, (err , result) => {
      if(err) console.log(err);
      console.log(JSON.stringify(result));
      db.close();
    });
  });
};

//module.exports = setupDB;
*/
module.exports = setupDB;
