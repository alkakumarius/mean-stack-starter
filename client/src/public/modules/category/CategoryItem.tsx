import { useState, useEffect } from "react";
import { ICategory, ICategoryMaster } from "./model";
export default function CategoryItem() {
    const initialState: ICategoryMaster = {
        categoryList: []
    }
    const [category, setCategory] = useState(initialState)
    useEffect(() => {
        const url = "http://localhost:4000/v1/categories";
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setCategory({
                    categoryList: res
                })
            });
    }, [])
    return (
        <>
            <ul className="list-group">
                {category.categoryList
                    .filter((category: ICategory) => {
                        return category.available;
                    }).map((category: ICategory, id: number) => {
                        return (
                            <li className="list-group-item" aria-current="true" key={id}>
                                <a className="nav-link" href={category.link}>
                                    {category.title}
                                </a>
                            </li>
                        )
                    })}

            </ul>
        </>
    )
}