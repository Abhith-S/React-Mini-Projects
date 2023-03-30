import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import styles from "./SingleQuestion.module.css";

const SingleQuestion = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <div className={styles.question}>
        <p>
          {title}
          {showInfo ? (
            <AiOutlineMinusCircle
              className={styles.question_button}
              onClick={() => setShowInfo(!showInfo)}
            />
          ) : (
            <AiOutlinePlusCircle
              className={styles.question_button}
              onClick={() => setShowInfo(!showInfo)}
            />
          )}
        </p>{" "}
      </div>

      {showInfo ? <div className={styles.question_info}>{info}</div> : null}
    </div>
  );
};

export default SingleQuestion;
