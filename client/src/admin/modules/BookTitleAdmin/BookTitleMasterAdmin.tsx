import { useEffect, useState } from "react";
import BookTitleAdmin from "./components/BookTitleAdmin"
import BookTitleListAdmin from "./components/BookTitleListAdmin"
import BookTitleUpdate from "./components/BookTitleUpdate";


import { BookTitleServerMasterGet, BookTitleServerMasterPost, BookTitleServerMasterPut, BookTitleServerMasterDelete, } from './BookTitleServerAdmin';
import { BookTitle, IUpdateBookTitle, IBookTitleMaster } from "./ModelBook";

export default function CategoryMaster() {

    const intialState: IBookTitleMaster = {
        bookTitle: []
    }
    const intialUpdateState: IUpdateBookTitle = {
        bookTitle: {
            title: "",

        }
    }
    const [updateBookTitle, setUpdateBookTitle] = useState(intialUpdateState);
    const [state, setState] = useState(intialState)
    const [toggle, setToggle] = useState(true);


    const handleCategoryCreate = (bookTitle: BookTitle) => {
        BookTitleServerMasterPost(bookTitle)
            .then(() => {
                getBookTitle();
            })

    }
    useEffect(() => {
        getBookTitle();

    }, [])

    const getBookTitle = () => {
        BookTitleServerMasterGet()
            .then(res => res.json())
            .then((res) => {
                setState({
                    bookTitle: res
                });
            });
    }
    const handleUpdateBookTitle = (bookTitle: BookTitle) => {
        setUpdateBookTitle({
            bookTitle: bookTitle

        });
        setToggle(!toggle)


    }
    const handleBookTitleDelete = (id: string) => {
        BookTitleServerMasterDelete(id)
            .then(() => {
                getBookTitle();

            })
    }
    const handleUpdateNewBookTitle = (bookTitle: BookTitle) => {
        BookTitleServerMasterPut(bookTitle)
            .then(() => {
                getBookTitle();
                setToggle(!toggle)
            })

    }

    return (
        <div className="container">

            {toggle ? (
                <div className="row">
                    <div className="col-3">
                        <BookTitleAdmin callback={handleCategoryCreate} />
                    </div>
                    <div className="col-9">
                        <BookTitleListAdmin bookTitle={state.bookTitle}
                            deleteCallback={handleBookTitleDelete}
                            updateCallback={handleUpdateBookTitle} />
                    </div>
                </div>

            ) : (
                <BookTitleUpdate
                    updateCategory={updateBookTitle}
                    updateCallback={handleUpdateNewBookTitle} />

            )}
        </div>


    )
}