import React from "react";
import styles from './Post.module.css'


function Post (props) {
  //destructure useful post info from props
  const {subreddit, thumbnail, permalink, post_hint, is_self, url} = props.postData



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
    <div className={styles.postCard} onClick={()=>{props.setPath(permalink)}}>
      <p>{`r/${subreddit}`}</p>
      {/*if the post has an image, render an image tag for thumbnail*/}
      {media === "img" ? <img src={url} className={styles.thumbnail}></img> : <></>}
      <p className={styles.postTitle}>{props.postData.title}</p>
      <p className={styles.postText}>{props.postData.selftext}</p>
    </div>
  )
}

export default Post