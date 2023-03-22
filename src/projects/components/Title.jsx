import React from 'react'
import styles from "./Title.module.css"

const Title = ({title}) => {

  return (
    <div className={styles.container}>
        <h1>{title ? title : "Title"}</h1>
    </div>
  )
}

export default Title