import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map((menuItem) => {
        const {category, desc, id, image, price, title} = menuItem;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{desc}</p>
            <p>$ {price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
