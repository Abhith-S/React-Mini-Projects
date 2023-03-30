import React from 'react'
import styles from "./Button.module.css"

const Button = ({icon,text="click me",onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>{icon} {text}</button>
  )
}

export default Button