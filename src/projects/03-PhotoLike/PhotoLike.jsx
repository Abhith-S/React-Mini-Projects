import React, { useState } from "react";
import styles from "./PhotoLike.module.css";
import Title from "../components/Title";

import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { GrDislikeFill } from "react-icons/gr";

const PhotoLike = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0)

  const toggleLike = () => {
    if(like){
        setLike(false)
     setCount(count-1) }
    else{
        setLike(true);
        setCount(count+1)
    } 
  };
  return (
    <div className={styles.container}>
      <Title title={"Photo Like"} />

      <h2>{count} Likes</h2>

      <div className={styles.container_box}>
        <div className={styles.container_box_headerBox}>
          <h2>Just a pic</h2>
        </div>
        <div className={styles.container_box_body}>
          <img
            src="https://cdn.discordapp.com/attachments/1038329663187062804/1087271664791867422/5OR5A_half_body_portrait_of_young_beautiful_woman_with_long_red_82ba02ce-de59-4633-902c-d1f03295e1f6.png"
            className={styles.container_box_body_image}
            alt="girl image"
            onDoubleClick={toggleLike}
          />
        </div>
        <div className={styles.container_box_footer}>
          <AiOutlineComment size={40}/>
          {like ? (
            <FcLike onClick={toggleLike} size={40}/>
          ) : (
            <AiOutlineHeart onClick={toggleLike} size={40}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoLike;
