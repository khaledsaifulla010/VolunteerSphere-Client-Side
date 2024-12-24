import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkWhiteMode = ({ setDarkMode }) => {
  const [toggleButton, setToggleButton] = useState(false);

  const toggleMode = () => {
    if (toggleButton) {
      // Light mode
      document.body.style.background = "#ffffff";
      document.body.style.color = "#000000";
      setDarkMode(false);
    } else {
      // Dark mode
      document.body.style.background = "#000000";
      document.body.style.color = "#ffffff";
      setDarkMode(true);
    }
    setToggleButton(!toggleButton);
  };

  const buttonStyles = {
    color: toggleButton ? "#fff" : "#000",
    fontSize: "30px",
    fontWeight: "bolder",
  };

  return (
    <button style={buttonStyles} onClick={toggleMode}>
      {toggleButton ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default DarkWhiteMode;
