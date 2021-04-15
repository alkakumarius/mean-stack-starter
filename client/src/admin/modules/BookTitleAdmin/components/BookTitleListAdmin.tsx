import React from "react"
import { BookTitle, IBookTitleMasterList } from "../ModelBook";

export default function BookTitleListAdmin(props: IBookTitleMasterList) {
    console.log(props)
    return (
        <>
            <div >
                <h1>Show BookTitle</h1>
                <hr />

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Publisher</th>
                            <th scope="col">Author</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.bookTitle.map((bookTitle: BookTitle, index: number) => {
                            const _id = bookTitle._id!;
                            return (
                                <tr>
                                    <th scope="row">{1 + index}</th>
                                    <td>{bookTitle.title}</td>
                                    <td>{bookTitle.publisher}</td>
                                    <td>{bookTitle.author}</td>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button onClick={() => {
                                            props.deleteCallback(_id);
                                        }} type="button" className="btn btn-danger">Delete BookTitle </button>
                                        <button onClick={() => {
                                            props.updateCallback(bookTitle);
                                        }}
                                            type="button" className="btn btn-warning">Update BookTitle</button>
                                    </div>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </div>

        </>

    )
}


