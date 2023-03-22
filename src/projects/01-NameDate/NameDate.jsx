import React, { useState } from "react";
import styles from "./NameDate.module.css";

//passing a props for a title
const NameDate = ({title}) => {

    const [name, setName] = useState("");
    const [date , setDate] = useState("");

  return (
    <div className={styles.container}>

        <h1 className={styles.container_title}>{title ? title : "Project"}</h1>

      <div className={styles.container_data}>
        <h1>{name ? name : "Name"}</h1>
        <h2>{date ? date : "Date"}</h2>
      </div>

      <div className={styles.container_input}>
        <input className={styles.container_input_date} type="date" value={date} onChange={ (e)=> setDate(e.target.value) }/>
        <input className={styles.container_input_name} type="text" placeholder="enter name" value={name} onChange={ (e)=> setName(e.target.value) }/>
      </div>
    </div>
  );
};

export default NameDate;
