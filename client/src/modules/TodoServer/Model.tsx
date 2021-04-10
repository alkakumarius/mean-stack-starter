export  interface Post{
    _id?: string;
    email : string;
    comment: string;
}
export  interface IMasterList{
    postList : Post[];
    deleteCallback: (id: string) => void;
    updateCallback: (post: Post) => void;
}
export  interface IMasterUpdate{
    updatePost: IUpdatePost;
    updateCallback: (post: Post) => void;

}
export interface IUpdatePost {
    post: Post;
}
export  interface IMaster{
    postList : Post[];
}
export interface ICallBack{
    callback: (post: Post) => void;
}