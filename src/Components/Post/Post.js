import React from "react";
import styles from './Post.module.css'


function Post (props) {
  const {subreddit, thumbnail, permalink} = props.postData

  return (
    <div className={styles.postCard} onClick={()=>{props.setPath(permalink)}}>
      <p>{`r/${subreddit}`}</p>
      <p className={styles.postTitle}>{props.postData.title}</p>
      <p className={styles.postText}>{props.postData.selftext}</p>
    </div>
  )
}

export default Post