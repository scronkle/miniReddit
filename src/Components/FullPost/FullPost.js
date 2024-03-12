import React from "react";
import styles from './FullPost.module.css'
import Comment from "../Comment/Comment";


function FullPost(props) {
  const {title, author, thumbnail, selftext} = props.postInfo[0].data.children[0].data
  const comments = props.postInfo[1].data.children
  console.log(comments)

  return (
    <div>
      <div className={styles.postHead}>
        <h1>{title}</h1>
        <p>{selftext}</p>
      </div>
      <div className={styles.commentsSection}>
        {comments.map((comment)=>{
          return (
            <Comment data={comment} key={comment.data.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default FullPost