import { useEffect, useState } from "react";
import CategoryCreate from "./components/CategoryCreateAdmin";
import CategoryUpdate from "./components/CategoryUpdateAdmin";


import CategoryList from "./components/CategoryListAdmin";
import { CategoryServerMasterPost, CategoryServerMasterGet, CategoryServerMasterDelete, CategoryServerMasterPut, } from './CategoryServiceAdmin';
import { Category, ICategoryMaster, IUpdateCategory } from "./ModelAdmin";

export default function CategoryMaster() {

    const intialState: ICategoryMaster = {
        categoryList: []
    }
    const intialUpdateState: IUpdateCategory = {
        category: {
            title: "",
            link: "",
            available: true
        }
    }
    const [updateCategory, setUpdateCategory] = useState(intialUpdateState);
    const [state, setState] = useState(intialState)
    const [toggle, setToggle] = useState(true);


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
    const handleUpdateCategory = (category: Category) => {
        setUpdateCategory({
            category: category

        });
        setToggle(!toggle)


    }
    const handleCategoryDelete = (id: string) => {
        CategoryServerMasterDelete(id)
            .then(() => {
                getCategory();

            })
    }
    const handleUpdateNewCategory = (category: Category) => {
        CategoryServerMasterPut(category)
            .then(() => {
                getCategory();
                setToggle(!toggle)
            })

    }

    return (
        <div className="container">
          
            {toggle ? (
                <div className="row">
                    <div className="col-3">
                        <CategoryCreate callback={handleCategoryCreate} />
                    </div>
                    <div className="col-9">
                        <CategoryList categoryList={state.categoryList}
                            deleteCallback={handleCategoryDelete}
                            updateCallback={handleUpdateCategory} />
                    </div>
                </div>

            ) : (
                <CategoryUpdate
                    updateCategory={updateCategory}
                    updateCallback={handleUpdateNewCategory} />

            )}
        </div>


    )
}