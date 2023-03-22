import React from "react";
import styles from "./List.module.css";

const List = ({ people }) => {
  return (
    <div className={styles.container}>
      {people.map((person) => {
        // destructuring the array
        const { id, name, age, image } = person;

        return (
          <div key={id}>
            <img src={image} />
            <h3>{name}</h3>
            <h3>{age} years</h3>
          </div>
        );
      })}
    </div>
  );
};

export default List;
