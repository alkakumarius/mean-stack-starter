import { useEffect, useState } from "react";
import CategoryCreate from "./components/CategoryCreate";
// import CategoryUpdate from "./components/CategoryUpdate";


import CategoryList from "./components/CategoryList";
import { CategoryServerMasterPost, CategoryServerMasterGet, CategoryServerMasterDelete, } from './CategoryService';
import { Category, ICategoryMaster } from "./Model";

export default function CategoryMaster() {

    const intialState: ICategoryMaster = {
        categoryList: []
    }
    // const intialUpdateState: IUpdateCategory = {
    //     category: {
    //         title: "",
    //         link: "",
    //         checked: true
    //     }
    // }
    // const [updateCategory, setUpdateCategory] = useState(intialUpdateState);
    const [state, setState] = useState(intialState)

    const handleCategoryCreate = (category: Category) => {
        CategoryServerMasterPost(category)
            .then(() => {
                getCategory();
            })

    }
    useEffect(() => {
        getCategory();

    }, [])

    const getCategory = () => {
        CategoryServerMasterGet()
            .then(res => res.json())
            .then((res) => {
                setState({
                    categoryList: res
                });
            });
    }
    const handleUpdateCategory = () => {


    }
    const handleCategoryDelete = (id: string) => {
        CategoryServerMasterDelete(id)
            .then(() => {
                getCategory();
            })
    }


    return (
        <>
            <CategoryCreate callback={handleCategoryCreate} />
            <CategoryList categoryList={state.categoryList}
                deleteCallback={handleCategoryDelete}
                updateCallback={handleUpdateCategory} />
            {/* <CategoryUpdate
                updateCategory={updateCategory}
                updateCallback={abc}
            /> */}
        </>

    )
}