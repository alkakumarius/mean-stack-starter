import React, { useState } from 'react';
import TodoCreate from './components/TodoCreateAdmin';
import TodoList from './components/TodoListAdmin';
import TodoUpdate from './components/TodoUpdateAdmin';
import { Post, IMaster, IUpdatePost } from './Model';


export default function TodoMaster() {
    const intialState: IMaster = {
        postList: []
    }
    const intialUpdateState: IUpdatePost = {
        index: 0,
        post: {
            comment: "",
            email: ""
        }
    }
    const [state, setState] = useState(intialState);
    const [toggle, setToggle] = useState(true);
    const [updatePost, setUpdatePost] = useState(intialUpdateState);

    const handleTodoCreate = (post: Post) => {
        setState({
            postList: [...state.postList, post]
        });
    }
    const handleDelete = (id: number) => {
        let prevPostList = JSON.parse(JSON.stringify(state.postList));
        prevPostList.splice(id, 1);
        setState({
            postList: prevPostList
        });
    }
    const handleUpdate = (post: Post, id: number) => {
        setUpdatePost({
            post: post,
            index: id
        });

        setToggle(!toggle)
    }
    const handleUpdatePost = (post: Post, id: number) => {
        let prevPostList = JSON.parse(JSON.stringify(state.postList));
        prevPostList[id] = post;
        setState({
            postList: prevPostList,
           
        });
        setToggle(!toggle)
    }

    return (
        <div className="container">
            {toggle ? (
                <div className="row">
                    <div className="col-3">
                        <TodoCreate callback={handleTodoCreate} />
                    </div>
                    <div className="col-9">
                        <TodoList
                            postList={state.postList}
                            deleteCallback={handleDelete}
                            updateCallback={handleUpdate}
                        />
                    </div>
                </div>
            ) : (
                <TodoUpdate
                    updatePost={updatePost}
                    updateCallback={handleUpdatePost}
                />
            )}
        </div>
    );
}