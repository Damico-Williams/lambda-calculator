import React, {useState} from "react";
import "./App.css"

export const NumberButton = (props) => {
  
  
  return (
    <div>
    <button className="numButtons">{props.number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
    
    </div>
  );
};

export default NumberButton
