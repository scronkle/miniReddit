import React from "react";
import styles from './Post.module.css'


function Post (props) {
  return (
    <div className={styles.postCard}>
      <p className={styles.postTitle}>{props.postData.title}</p>
      <p className={styles.postText}>{props.postData.selftext}</p>
    </div>
  )
}

export default Post