import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div>
      <Title title={"Testimonials App"} />
      <Button
        text={"Posts"}
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonials("Posts")}
      />

      <Button
        text={"Users"}
        icon={<FaUserAlt />}
        onClick={() => setTestimonials("Users")}
      />

      <Button
        text={"Comments"}
        icon={<BiCommentDetail />}
        onClick={() => setTestimonials("Comments")}
      />

      <Title title={!testimonials ? "Select form above!" : testimonials} />

      {!items
        ? null
        : items.map((item) => {
            return (
              <div key={item.id}>
                {item.name && <h2>{item.name}</h2>}
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && <small>{item.email}</small>}
              </div>
            );
          })}
          
    </div>
  );
}
