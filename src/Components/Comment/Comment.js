import React from "react";

function Comment(props) {
  const {body, author, score, } = props.data.data

  return (
    <div>
      <p>{score} points - u/{author}</p>
      <p>{body}</p>
    </div>
  )
}

export default Comment