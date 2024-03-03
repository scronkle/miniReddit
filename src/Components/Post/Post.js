import React from "react";
import styles from './Post.module.css'


function Post (props) {
  return (
    <div>
      <p className={styles.postTitle}>{props.postData.title}</p>
      <p>{props.postData.selftext}</p>
    </div>
  )
}

export default Post