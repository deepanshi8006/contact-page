import React from 'react'
import styles from ".//Button.module.css"

const Button = (props) => {
  return (
    <>
    <button className={props.outline ? styles.btn2 : styles.btn} style={props.style}>
        {props.icon}{props.text}
    </button>
</>

  )
}

export default Button