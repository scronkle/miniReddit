import React from "react";
import Post from "../Post/Post";

function Feed(props) {
  return (
    <div className="feed">
      {props.posts.map((post)=>{
        return (
          <Post postData={post.data}/>
        )
      })}
    </div>
  )
}

export default Feed