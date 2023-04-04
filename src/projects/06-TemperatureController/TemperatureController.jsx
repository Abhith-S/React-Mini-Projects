import React, { useState } from "react";
import Title from "../components/Title";
import styles from "./TemperatureController.module.css";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
const TemperatureController = () => {
  const [temperature, setTemperature] = useState(0);

  return (
    <div>
      <Title title={"Temperature Controller"} />

      <div className={temperature > 0 ? styles.red:styles.blue} >
        <h1 className={styles.temp_text}>
          {temperature}
          <span>&#176;</span> C
        </h1>
        <AiFillMinusSquare
          className={styles.button}
          onClick={() => {
            setTemperature(temperature - 1);
          }}
        />
        <AiFillPlusSquare
          className={styles.button}
          onClick={() => {
            setTemperature(temperature + 1);
          }}
        />
      </div>
    </div>
  );
};

export default TemperatureController;
