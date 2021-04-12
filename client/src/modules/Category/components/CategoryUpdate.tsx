import { useState,useEffect } from "react";
import { Category, ICategoryMasterUpdate } from "../Model";

export default function CategoryUpdate(props: ICategoryMasterUpdate) {
    const intialCategory: Category = {
        title: "",
        link: "",
        checked: true
    }
    const [category, setCategory] = useState(intialCategory);

    const handleOnChange = (e: { target: { name: string | number; value: any; }; }) => {
        let prevCategory = JSON.parse(JSON.stringify(category));
        prevCategory[e.target.name] = e.target.value;
        setCategory(prevCategory);

    }
    const handleOnChangeChecked = (e: { target: { name: string | number; checked: any; }; }) => {
        let prevCategory = JSON.parse(JSON.stringify(category));
        prevCategory[e.target.name] = e.target.checked;
        setCategory(prevCategory);
    }
    useEffect(() => {
        setCategory(props.updateCategory.category)
    }, [props])
    const handleClick = () => {
        props.updateCallback(category)
        setCategory(intialCategory)

    }
    return (
        <div >
            <h1>Create Category</h1>
            <hr />
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input name="title" onChange={handleOnChange} value={category.title} type="title" className="form-control" id="exampleFormControlInput1" placeholder="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                <input name="link" onChange={handleOnChange} value={category.link} type="link" className="form-control" id="exampleFormControlInput1" placeholder="link" />
            </div>
            <div className="mb-3">
                <input className="form-check-input" type="checkbox"
                    checked={category.checked} id="flexCheckChecked" name="checked" onChange={handleOnChangeChecked} />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Available For Review
            </label>
            </div>
            <button onClick={handleClick} type="button" className="btn btn-primary">Add Category</button>
        </div>
    )
}




