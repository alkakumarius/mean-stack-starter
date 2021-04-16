import { useState, useEffect } from "react";

import {   IBookMaster } from "../bookModel";
export default function BookTitle() {
    const initialState: IBookMaster = {
        Architecture: [
            {
                "book_title": "API Textbook of Medicine",
                "book_img": "https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/401/9788193976401.jpg",
                "book_link": "https://www.bookswagon.com/book/api-textbook-medicine-sandhya-kamath/9788193976401",
                "book_price_sell": "Rs.4,745",
                "book_price": "Rs.6,500",
                "book_extra": {
                    "Binding:": "Paperback",
                    "Release:": "30 Apr 2021",
                    "Language:": "English"
                },
                "book_author_publisher": {
                    "By": {
                        "Sandhya Kamath": "https://www.bookswagon.com/author/sandhya-kamath"
                    },
                    "Publisher": {
                        "Eurospan": "https://www.bookswagon.com/publisher/eurospan"
                    }
                }
            },
        ]

    }
    const [bookTitle, setBookTitle] = useState(initialState)
    useEffect(() => {
        const url = "http://localhost:4000/v1/Architectures";
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setBookTitle({
                    Architecture: res
                })
            });
    }, [])
    return (
        <div className="w- p-3">
            <ul className="list-group">
                {bookTitle.Architecture.map((ele,id) => {
                    console.log(ele)
                    
                    return (
                        <div>
                            <li className="list-group-item" aria-current="true" >

                            </li>
                            <li className="list-group-item" aria-current="true" >

                            </li>
                            <li className="list-group-item" aria-current="true">

                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}