import React, { useState } from "react";
import Title from "../components/Title";
import questions from "./data";


import SingleQuestion from "./SingleQuestion";

const Accordian = () => {
  
  return (
    <div>
      <Title title={"Accordian"} />

      {questions.map((question) => {
        
        return <SingleQuestion key={question.id} {...question} />
            
      })}
    </div>
  );
};

export default Accordian;
