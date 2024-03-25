import React from "react";
import styles from './NavBar.module.css'
import { useState } from "react";


function NavBar (props) {

  function back() {
    props.navigateHistory('back')
  }


    return (
        <div className={styles.NavBar}>
          <button className={styles.buttons} onClick={back}>back?</button>
          <p>
            miniReddit
          </p>
        </div>
        );
}

export default NavBar;