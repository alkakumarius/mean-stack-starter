import React, { useState, useEffect } from 'react';
import { IMasterUpdate, Post } from '../Model';

export default function TodoUpdate(props: IMasterUpdate) {
  // Declare a new state variable, which we'll call "count"  
  const intialPost: Post = {
    email: "",
    comment: ""
  }
  const [post, setPost] = useState(intialPost);
  const [disabled, setDisabled] = useState(false);

  useEffect(()=>{
    setPost(props.updatePost.post)
  }, [props])

  const isValid = (post: Post) => {
    if(post.comment.length === 0){
        return false;
    }

    if(post.email.length === 0){
        return false;
    }

    return true;

}

  const handleOnChange = (e: { target: { name: string | number; value: any; }; }) => {
    let prevPost = JSON.parse(JSON.stringify(post));
    prevPost[e.target.name] = e.target.value;
    setPost(prevPost);
    const valid = isValid(prevPost);
    alert(valid)

    if(valid === true){
      setDisabled(false);
     }else{
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
      <hr/>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input name="email" onChange={handleOnChange} value={post.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments</label>
        <textarea name="comment" onChange={handleOnChange} value={post.comment} className="form-control" id="exampleFormControlTextarea1" rows={3} ></textarea>
      </div>
      <button disabled={disabled} onClick={handleClick} type="button" className="btn btn-primary">Update Post</button>
    </div>
  );
}