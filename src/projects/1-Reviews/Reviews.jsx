import React, { useState } from "react";
import people from "./data";
import Title from "../components/Title";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Buttton from "../components/Button";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const checkIndexEnd = (number) => {
    if (number > (people.length - 1)) {
      return 0;
    }
    if (number < 0) {
      return (people.length - 1);
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndexEnd(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndexEnd(newIndex);
    });
  };

  const randomPerson = () =>{
    setIndex(
        (index)=>{
            let randomIndex = Math.floor((Math.random() * (people.length)))
            console.log(randomIndex)
            return randomIndex;
           
        }
    )
  }

  //destructuring people array
  const {image, job, name, text } = people[index];
  return (
    <div>
      <Title title={"Reviews"} />
      <div>
        <img src={image} alt={name} height={200} width={150} />
        <h2>{name}</h2>
        <p>{job}</p>
        <p>{text}</p>
      </div>
      <button onClick={prevPerson} ><AiOutlineLeft /></button>
      <button onClick={nextPerson} ><AiOutlineRight /></button>
      <Buttton text={"Surprise me"} onClick={randomPerson}/>
    </div>
  );
};

export default Reviews;
