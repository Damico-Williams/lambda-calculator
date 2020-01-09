import React from "react";

export const OperatorButton = (props) => {
  return (
    <div>
    <button className="operators">{props.operator}
      {/* Display a button element rendering the data being passed down from the parent container on props*/}
    </button>
    </div>
  );
};

export default OperatorButton;
