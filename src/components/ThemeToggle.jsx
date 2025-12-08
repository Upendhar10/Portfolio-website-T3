import {useContext} from 'react'
import {ThemeContext} from "../context/ThemeContext.jsx";
import { MdWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

function ThemeToggle() {
    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
   <button onClick={toggleTheme}>
      {theme === "dark" ? <MdWbSunny/> : <IoMoon/> }
    </button>
  )
}

export default ThemeToggle