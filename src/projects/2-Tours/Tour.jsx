import React, { useState } from "react";
import styles from "./Tour.module.css";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles.tour}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h2>${price}</h2>
      <p>
        {showMore ? info : `${info.substring(0, 200)}.....`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "read less" : "read more"}
        </button>
      </p>
      <button
        onClick={() => removeTour(id)
        }
      >
        Not interested
      </button>
    </div>
  );
};

export default Tour;
