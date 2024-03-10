import React from "react";
import styles from './Directory.module.css'

function Directory(props) {
  const path = props.path
  function handleClick(goal) {
    props.setPath(goal)
  }

  let best = <p onClick={()=>{props.setPath('best')}}>BEST</p>
  let top = <p onClick={() => {props.setPath('top')}}>TOP</p>
  let New = <p onClick={()=>{props.setPath('new')}}>NEW</p>
  
  switch (path) {
    case "best":
      best = <p className={styles.here}>BEST</p>
      break
    case "top":
      top = <p className={styles.here}>TOP</p>
      break
    case "new":
      New = <p className={styles.here}>NEW</p>
  }


  return (
    <div>
      {best}
      {top}
      {New}
    </div>
  )
}

export default Directory