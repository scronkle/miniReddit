import React from "react";
import styles from './Directory.module.css'

function Directory(props) {
  const path = props.path
  function handleClick(goal) {
    props.setPath(goal)
  }

  let home = <p onClick={()=>{props.setPath('home')}}>HOME</p>
  let top = <p onClick={() => {props.setPath('top')}}>TOP</p>
  let New = <p onClick={()=>{props.setPath('new')}}>NEW</p>
  
  switch (path) {
    case "home":
      home = <p className={styles.here}>HOME</p>
      break
    case "top":
      top = <p className={styles.here}>TOP</p>
      break
    case "new":
      New = <p className={styles.here}>NEW</p>
  }


  return (
    <div>
      {home}
      {top}
      {New}
    </div>
  )
}

export default Directory