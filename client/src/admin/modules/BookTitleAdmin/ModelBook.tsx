export interface BookTitle {
    title: string,
    _id?: string;


}
export interface IBookTitleMaster {
    bookTitle: BookTitle[]

}
export interface IBookTitleCallBack {
    callback: (bookTitle: BookTitle) => void;
}
export interface IBookTitleMasterList {
    bookTitle: BookTitle[];
    deleteCallback: (id: string) => void;
    updateCallback: (bookTitle: BookTitle) => void;

}
export interface IUpdateBookTitle {
    bookTitle: BookTitle

}
export interface IBookTitleMasterUpdate {
    updateCategory: IUpdateBookTitle;
    updateCallback: (BookTitle: BookTitle) => void;

}
