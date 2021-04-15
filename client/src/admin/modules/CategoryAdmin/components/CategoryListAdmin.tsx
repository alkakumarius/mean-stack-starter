import { Category, ICategoryMasterList } from "../ModelAdmin";

export default function CategoryList(props: ICategoryMasterList) {
    console.log(props)
    return (
        <>
            <div className="w-25 p-3">
                <h1>Show Categories</h1>
                <hr />
                {props.categoryList.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Link</th>
                                <th scope="col">Available</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.categoryList.map((category: Category, index: number) => {
                                const _id = category._id!;
                                return (
                                    <tr>
                                        <th scope="row">{1 + index}</th>
                                        <td>{category.title}</td>
                                        <td>{category.link}</td>
                                        <td>{category.available + ""}</td>
                                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                            <button onClick={() => {
                                                props.deleteCallback(_id);
                                            }} type="button" className="btn btn-danger">Delete Category</button>
                                            <button onClick={() => {
                                                props.updateCallback(category);
                                            }}
                                                type="button" className="btn btn-warning">Update Category</button>
                                        </div>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                ) : (
                    <div>
                        No post yet!
                    </div>
                )}
            </div>

        </>

    )
}