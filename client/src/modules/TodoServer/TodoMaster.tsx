import React, { useEffect, useState } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import TodoUpdate from './components/TodoUpdate';
import { Post, IMaster, IUpdatePost } from './Model';
import { TodoServerMasterDelete, TodoServerMasterGet, TodoServerMasterPatch, TodoServerMasterPost } from './TodoService';


export default function TodoServerMaster() {
    const intialState: IMaster = {
        postList: []
    }
    const intialUpdateState: IUpdatePost = {
        post: {
            comment: "",
            email: "",
            _id: ""
        }
    }
    const [state, setState] = useState(intialState);
    const [toggle, setToggle] = useState(true);
    const [updatePost, setUpdatePost] = useState(intialUpdateState);

    const handleTodoCreate = (post: Post) => {
        TodoServerMasterPost(post)
            .then(() => {
                getTodos();
            })
    }
    const handleDelete = (id: string) => {
        TodoServerMasterDelete(id)
            .then(() => {
                getTodos();
            })
    }
    const handleUpdate = (post: Post) => {
        setUpdatePost({
            post: post
        });

        setToggle(!toggle)
    }
    
    const handleUpdatePost = (post: Post) => {
        TodoServerMasterPatch(post)
        .then(() => {
            getTodos();
            setToggle(!toggle)
        })
    }

    useEffect(() => {
        getTodos();

    }, [])

    const getTodos = () => {
        TodoServerMasterGet()
            .then(res => res.json())
            .then((res) => {
                setState({
                    postList: res
                });
            });
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