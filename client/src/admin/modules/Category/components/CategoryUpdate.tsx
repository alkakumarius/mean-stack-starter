import { useState, useEffect } from "react";
import { Category, ICategoryMasterUpdate } from "../Model";

export default function CategoryUpdate(props: ICategoryMasterUpdate) {
    const intialCategory: Category = {
        title: "",
        link: "",
        available: true
    }
    const [category, setCategory] = useState(intialCategory);
    const [disabled, setDisabled] = useState(true);

    const isValid = (category: Category) => {
        if ( category.title.length === 0) {
            return false;
        }
        if (category.link.length === 0) {
            return false;
        }
        return true;
    }

    const handleOnChange = (e: { target: { name: string | number; value: any; }; }) => {
        let prevCategory = JSON.parse(JSON.stringify(category));
        prevCategory[e.target.name] = e.target.value;
        setCategory(prevCategory);
        const valid = isValid(prevCategory)
        if(valid===true){
            setDisabled (false)
        }else{
            setDisabled(true)
        }

    }
    const handleOnChangeAvailable = (e: { target: { name: string | number; checked: boolean; }; }) => {
        let prevCategory = JSON.parse(JSON.stringify(category));
        prevCategory[e.target.name] = e.target.checked;
        setCategory(prevCategory);
        const valid = isValid(prevCategory)
        if(valid===true){
            setDisabled (false)
        }else{
            setDisabled(true)
        }
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
                    checked={category.available} id="flexCheckAvailable" name="available" onChange={handleOnChangeAvailable} />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Available For Review
            </label>
            </div>
            <button disabled={disabled} onClick={handleClick} type="button" className="btn btn-primary">Add Category</button>
        </div>
    )
}




