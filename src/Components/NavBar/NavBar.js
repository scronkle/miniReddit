import React from "react";
import styles from './NavBar.module.css'
import { useState } from "react";


function NavBar (props) {

    return (
        <div className={styles.NavBar}>
          <p>
            miniReddit
          </p>
        </div>
        );
}

export default NavBar;