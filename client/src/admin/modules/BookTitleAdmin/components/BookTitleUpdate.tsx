import { useState, useEffect } from "react";
import { BookTitle, IBookTitleMasterUpdate } from '../ModelBook';


export default function BookTitleUpdate(props: IBookTitleMasterUpdate) {
    const intialBook: BookTitle = {
        title: "",
        publisher: "",
        author: "",
        releaseDate:"",


    }
    const [bookTitle, setBookTitle] = useState(intialBook);
    const [disabled, setDisabled] = useState(true);

    const isValid = (bookTitle: BookTitle) => {
        console.log(bookTitle)
        if (bookTitle.title && bookTitle.title.length === 0) {
            return false;
        }
        if (bookTitle.publisher && bookTitle.publisher.length === 0) {
            return false;
        }
        if (bookTitle && bookTitle.author.length === 0) {
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
    useEffect(() => {
        setBookTitle(props.updateBookTitle.bookTitle)
    }, [props])
    const handleClick = () => {
        props.updateCallback(bookTitle)
    }

    return (
        <div >
            <h1>Update Book</h1>
            <hr />
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input name="title" onChange={handleOnChange} value={bookTitle.title} type="title" className="form-control" id="exampleFormControlInput1" placeholder="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Publisher</label>
                <input name="publisher" onChange={handleOnChange} value={bookTitle.publisher} type="publisher" className="form-control" id="exampleFormControlInput1" placeholder="publisher" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Author</label>
                <input name="author" onChange={handleOnChange} value={bookTitle.author} type="author" className="form-control" id="exampleFormControlInput1" placeholder="author" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">ReleaseDate</label>
                <input name="releaseDate" onChange={handleOnChange} value={bookTitle.releaseDate} type="releaseDate" className="form-control" id="exampleFormControlInput1" placeholder="releaseDater" />
            </div>
            <button disabled={disabled} onClick={handleClick} type="button" className="btn btn-primary">Update Book </button>
        </div>
    )
}




