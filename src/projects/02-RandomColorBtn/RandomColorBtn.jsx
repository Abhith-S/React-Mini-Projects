import React from "react";
import Title from "../components/Title";
import styles from "./RandomColorBtn.module.css";

const RandomColorBtn = () => {
  const handleClick = (event) => {
    const body = document.querySelector("body");

    body.style.background = getRandomColor();

    event.target.style.backgroundColor = getRandomColor();
  };

  const getRandomColor = () => {
    const alphanumeric = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += alphanumeric[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className={styles.container}>
      <Title title={"Random Color Buttons"} />

      <button className={styles.container_button} onClick={handleClick}>
        Click Me
      </button>
      <button className={styles.container_button} onClick={handleClick}>
        Click Me
      </button>
      <button className={styles.container_button} onClick={handleClick}>
        Click Me
      </button>
      <button className={styles.container_button} onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default RandomColorBtn;
