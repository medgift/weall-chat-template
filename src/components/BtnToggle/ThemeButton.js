import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function ThemeBotton() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const handleTheme = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("darkMode", !darkMode);
    };
    return (
        <div
            onClick={handleTheme}
            className={darkMode ? 'btn-toggle goLight' :
            'btn-toggle goDark'}>{
                darkMode
                    ? "Light"
                    : "Dark"
            }

        </div>
    );
}

export default ThemeBotton;