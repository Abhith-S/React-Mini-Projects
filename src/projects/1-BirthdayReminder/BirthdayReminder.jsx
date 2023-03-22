import React, {useState} from "react";
import styles from "./BirthdayReminder.module.css";
import List from "./List";
import data from "./Data";
import Title from "../components/Title";

const BirthdayReminder = () => {
  const handleClick = () => {
    setPeople([]);
  };

  const [people, setPeople] = useState(data);
  return (
    <div className={styles.container}>
      <Title title={"Birthday Reminder"}/>

      <div className={styles.container_list}>
        <h2>{people.length} Birthdays Today</h2>
        <List people={people}/>
        <button className={styles.container_list_button} onClick={handleClick}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default BirthdayReminder;
