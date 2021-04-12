
export interface Category {
    _id?: string;
    checked: boolean;
    title: string,
    link: string,
}
export interface ICategoryCallBack {
    callback: (category: Category) => void;
}
export interface ICategoryMasterList {
    categoryList: Category[];
    deleteCallback: (id: string) => void;
    updateCallback: (category: Category) => void;
    
}
export interface IUpdateCategory {
    category:Category

}
export interface ICategoryMasterUpdate {
    updateCategory: IUpdateCategory;
    updateCallback: (category: Category) => void;

}
export interface ICategoryMaster {
    categoryList: Category[];
}