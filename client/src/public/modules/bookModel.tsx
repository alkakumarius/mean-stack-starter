export interface IBook {
    Architecture: [{
        book_title: string,
        book_img: string,
        book_price_sell: string,
        book_linl: string,
        book_price: string
        book_extra: {
            Binding: string,
            Release: string,
            Language: string,
        },
        book_author_publisher: {
            By: {
                SandhyaKamath: string
            },
            Publisher: {
                Eurospan: string
            }
        }
    }

    ]



}
export interface IBookMaster {
    Architecture: [{

    }]


}