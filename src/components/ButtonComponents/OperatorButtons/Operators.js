import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton.js"

//import any components needed

//Import your array data to from the provided data file

export const Operators = () => {
  // STEP 2 - add the imported data to state
  const [opValue, setopValue] = useState(operators)
  console.log(opValue)
  return (
    <div>
      {opValue.map((opps) => {
           return <OperatorButton operator={opps.char} />
       })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
