import React,{useState} from 'react'
import items from "./data"
import Menu from './Menu'
import Categories from './Categories'
import Title from "../components/Title"

const Menumain = () => {

    const [menuItems, setMenuItems] = useState(items);
    const [categories , setCategories] = useState([]);

    //filter the items
   const newItems = items.filter( (item)=>category === item.category))


  return (
    <div>
        <Title title={"MENU"}/>
        <Menu menuItems={menuItems}/>    
        <Categories />
    </div>
  )
}

export default Menumain