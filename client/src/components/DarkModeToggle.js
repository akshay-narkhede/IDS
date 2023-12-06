import React from 'react';
import {useState, useEffect} from 'react';
import Toggle from 'react-toggle';
import { FaSun, FaMoon } from 'react-icons/fa';
import Switch from 'react-switch';
import { IoSunnySharp } from "react-icons/io5";


// CSS Style:
// .dark-mode-toggle {
//     position: fixed;
//     top: 20px;
//     right: 20px;
//     display: flex;
//     align-items: center;
//   }
  
//   .react-switch {
//     margin-left: 10px; /* Adjust the margin for spacing */
//   }


function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode) {
        setIsDarkMode(savedMode === 'true');
      } else {
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(userPrefersDark);
      }
    }, []);
  
    useEffect(() => {
      document.body.classList.toggle('dark-mode', isDarkMode);
      localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);
  
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };
  
    return (
      <div className="dark-mode-toggle">
        <Switch
          onChange={toggleDarkMode}
          checked={isDarkMode}
          onColor="#2E3B4E"
          onHandleColor="#ffffff"
          offColor="#990000"
          offHandleColor="#2E3B4E"
          uncheckedIcon={<IoSunnySharp color="#FDB813" size="xlarge"/>}
          checkedIcon={<FaMoon  size="xlarge"/>}
          
          height={30}
          width={60}
          className="react-switch"
        />
      </div>
    );
}

export default DarkModeToggle