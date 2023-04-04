import React, { useEffect, useState } from "react";
import styles from "./Alert.module.css";
import Button from "./Button";

const Alert = ({ message, delay = false, delayTime = 3000 }) => {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 400);
  };

  //creating an auto alert closing
  useEffect(() => {
    delay &&
      setTimeout(() => {
        setShowAlert(false);
      }, delayTime);
  });
  return (
    showAlert && (
      <div className={styles.alert}>
        {message}
        <button onClick={closeAlert}>X</button>
      </div>
    )
  );
};

export default Alert;
