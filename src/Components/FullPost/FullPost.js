import React from "react";
import styles from './FullPost.module.css'
import Comment from "../Comment/Comment";


function FullPost(props) {
  const {title, author, thumbnail, selftext, url, is_self, post_hint} = props.postInfo[0].data.children[0].data
  const comments = props.postInfo[1].data.children
  console.log(comments)

    //get the type of submission
    let media = ""
    if (is_self) {
      media = "text"
    } else if (post_hint) {
      if (post_hint.includes('image')) {
        media = "img"
      } else if (post_hint.includes('video')) {
        media = "video"
      }
    } else {
      console.log('edge case:')
      console.log(props.postData)
    }

  return (
    <div>
      <div className={styles.postHead}>
        {media === "img" ? <img src={url} className={styles.image}></img> : <></>}
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