import React, { useContext, useState } from "react";
import Button from "../components/Button";
import { ThemeContext,themes } from "./context/theme-context";
import Title from "../components/Title";

const Blog = ({setTheme}) => {
  const theme = useContext(ThemeContext);

  const [buttonTheme, setbuttonTheme] = useState(buttonLightTheme);
  const [bodyTheme, setBodyTheme] = useState(bodyLightTheme);


  const toggleTheme = ()=>{
    if(theme === "Dark"){
      setbuttonTheme(buttonLightTheme);
      setBodyTheme(bodyLightTheme);
      setTheme(themes.light)
    }
    else{
      setbuttonTheme(buttonDarkTheme);
      setBodyTheme(bodyDarkTheme);
      setTheme(themes.dark)
    }
  }

  return (
    <div style={bodyTheme}>
      <Title title={`${theme} Mode`} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        blanditiis perspiciatis asperiores id exercitationem veniam? Velit
        reprehenderit dolore reiciendis rerum ab! Similique facere cum omnis ea
        tempore pariatur voluptas eaque?
      </p>
      <Button text={theme==="Dark"?"Light":"Dark"} onClick={toggleTheme} styles={buttonTheme} />
    </div>
  );
};

const buttonLightTheme = {
  backgroundColor: "black",
  color: "white",
  fontSize: ".8rem",
  padding: ".2rem",
  borderRadius: "25%",
  cursor: "pointer"
};

const buttonDarkTheme = {
  backgroundColor: "white",
  color: "black",
  fontSize: ".8rem",
  padding: ".2rem",
  borderRadius: "25%",
  cursor: "pointer"

};

const bodyLightTheme = {
  backgroundColor: "white",
  color: "black",
  textAlign: "center",

  lineHeight: 3,
};
const bodyDarkTheme = {
  backgroundColor: "black",
  color: "white",
  height: "100vh",
  textAlign: "center",

  lineHeight: 3,
};

export default Blog;
