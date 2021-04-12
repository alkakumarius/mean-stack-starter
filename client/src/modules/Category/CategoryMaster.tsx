import { useEffect, useState } from "react";
import CategoryCreate from "./components/CategoryCreate";
import CategoryUpdate from "./components/CategoryUpdate";


import CategoryList from "./components/CategoryList";
import { CategoryServerMasterPost, CategoryServerMasterGet, CategoryServerMasterDelete, CategoryServerMasterPut, } from './CategoryService';
import { Category, ICategoryMaster, IUpdateCategory } from "./Model";

export default function CategoryMaster() {

    const intialState: ICategoryMaster = {
        categoryList: []
    }
    const intialUpdateState: IUpdateCategory = {
        category: {
            title: "",
            link: "",
            checked: true
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



    }
    const handleCategoryDelete = (id: string) => {
        CategoryServerMasterDelete(id)
            .then(() => {
                getCategory();
                setToggle(toggle!)
            })
    }
    const handleUpdateNewCategory = (category: Category) => {
        CategoryServerMasterPut(category)
            .then(() => {
                getCategory();
                setToggle(toggle!)
            })

    }

    return (
        <div className="container">
            {toggle ?(
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

            ):(
            <CategoryUpdate
                updateCategory={updateCategory}
                updateCallback={handleUpdateNewCategory} />

            )}




        </div>


    )
}