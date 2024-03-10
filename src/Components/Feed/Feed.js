import React from "react";
import Post from "../Post/Post";
import styles from "./Feed.module.css"

function Feed(props) {

  return (
    <div className={styles.Feed}>
      {props.posts.map((post)=>{
        return (
          <Post postData={post.data} key={post.data.id}/>
        )
      })}
    </div>
  )
}

export default Feed