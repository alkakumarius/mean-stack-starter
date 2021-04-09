export  interface Post{
    email : string;
    comment: string;
}

export  interface IMasterList{
    postList : Post[];
    deleteCallback: (id: number) => void;
    updateCallback: (post: Post, id: number) => void;
}
export  interface IMasterUpdate{
    updatePost: IUpdatePost;
    updateCallback: (post: Post, id: number) => void;

}

export interface IUpdatePost {
    post: Post;
    index: number;
}
export  interface IMaster{
    postList : Post[];
}

export interface ICallBack{
    callback: (post: Post) => void;
}