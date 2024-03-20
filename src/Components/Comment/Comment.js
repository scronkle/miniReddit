import React from "react";
import styles from './Comment.module.css'

function Comment(props) {
  const {body, author, score, } = props.data.data

  return (
    <div className={styles.commentCard}>
      <p className={styles.topLine}>{score} points - <span className={styles.author}>u/{author}</span></p>
      <p className={styles.body}>{body}</p>
    </div>
  )
}

export default Comment