interface Post{
    title : string;
    subtitle? : string;
    creationDate : Date;
    body : string;
    author : string;
    history?: Post[];
    comments? : Comment[];
    categories? : string[];
    tags? : string[];
}

interface Comment{
  body: string;
}

interface Posts extends Array<Post>{};
interface Comments extends Array<Post>{};
