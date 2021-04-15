import { useState } from "react";
import { BookTitle, IBookTitleCallBack } from '../ModelBook';


export default function BookTitleAdmin(props: IBookTitleCallBack) {
    const intialPost: BookTitle = {
        title: "",

    }
    const [bookTitle, setBookTitle] = useState(intialPost);
    const [disabled, setDisabled] = useState(true);

    const isValid = (bookTitle: BookTitle) => {
        if (bookTitle.title.length === 0) {
            return false;
        }

        return true;
    }

    const handleOnChange = (e: { target: { name: string | number; value: any; }; }) => {
        let prevBookTitle = JSON.parse(JSON.stringify(bookTitle));
        prevBookTitle[e.target.name] = e.target.value;
        setBookTitle(prevBookTitle);
        const valid = isValid(prevBookTitle)
        if (valid === true) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }

    const handleClick = () => {
        props.callback(bookTitle)
        setDisabled(true)
    }
    return (
        <div >
            <h1>Create BookTitle</h1>
            <hr />
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input name="title" onChange={handleOnChange} value={bookTitle.title} type="title" className="form-control" id="exampleFormControlInput1" placeholder="title" />
            </div>

            <button disabled={disabled} onClick={handleClick} type="button" className="btn btn-primary">Add Book </button>
        </div>
    )
}




