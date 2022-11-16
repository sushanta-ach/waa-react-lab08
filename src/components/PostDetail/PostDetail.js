import React from "react";
import './PostDetail.css'

const PostDetail=(props)=>{
    const{title,author}=props.data;
    return(
        <div className='post_Detail'>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <div className='post_action'>
                <a href='/'>Edit </a> &nbsp;&nbsp;&nbsp;
                <a href='/'>Delete</a>
            </div>
        </div>
    )
}
export default PostDetail