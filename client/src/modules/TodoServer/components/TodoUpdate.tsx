import React, { useState, useEffect } from 'react';
import { IMasterUpdate, Post } from '../Model';

export default function TodoUpdate(props: IMasterUpdate) {
  // Declare a new state variable, which we'll call "count"  
  const intialPost: Post = {
    email: "",
    comment: "",
    type: "",
    checked: true
  }
  const [post, setPost] = useState(intialPost);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setPost(props.updatePost.post)
  }, [props])

  const isValid = (post: Post) => {
    if (post.comment && post.comment.length === 0) {
      return false;
    }

    if (post.email && post.email.length === 0) {
      return false;
    }
    if (post.type && post.type.length === 0) {
      return false;
    }

    return true;

  }

  const handleOnChange = (e: { target: { name: string | number; value: any; }; }) => {
    let prevPost = JSON.parse(JSON.stringify(post));
    prevPost[e.target.name] = e.target.value;
    setPost(prevPost);
    const valid = isValid(prevPost);

    if (valid === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }
  const handleOnChangeChecked = (e: { target: { name: string | number; checked: any; }; }) => {
    let prevPost = JSON.parse(JSON.stringify(post));
    prevPost[e.target.name] = e.target.checked;
    setPost(prevPost);

    const valid = isValid(prevPost);
    if (valid === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }


  const handleClick = () => {
    props.updateCallback(post);
    setPost(intialPost)
  }
  return (
    <div className="container">
      <h1>Update Post</h1>
      <hr />
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input name="email" onChange={handleOnChange} value={post.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments</label>
        <textarea name="comment" onChange={handleOnChange} value={post.comment} className="form-control" id="exampleFormControlTextarea1" rows={3} ></textarea>
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="Default select example"
          name="type" onChange={handleOnChange} value={post.type} >
          <option selected>Type</option>
          <option value="General Topic">General Topic</option>
          <option value="Computer Technology">Computer Technology</option>
          <option value="Science Technology"> Science Technology</option>
        </select>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox"
          checked={post.checked} id="flexCheckChecked" name="checked" onChange={handleOnChangeChecked} />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Available For Review
        </label> 
          <button disabled={disabled} onClick={handleClick} type="button" className="btn btn-primary">Update Post</button>
    </div>
  );
}