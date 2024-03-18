import React from "react";
import styles from './Post.module.css'


function Post (props) {
  const {subreddit, thumbnail, permalink, post_hint, is_self} = props.postData
  let media = ""


  //get the type of submission
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
    <div className={styles.postCard} onClick={()=>{props.setPath(permalink)}}>
      <p>{`r/${subreddit}`}</p>
      {media === "img" ? <img src={thumbnail}></img> : <p>text post</p>}
      <p className={styles.postTitle}>{props.postData.title}</p>
      <p className={styles.postText}>{props.postData.selftext}</p>
    </div>
  )
}

export default Post