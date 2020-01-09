import React, {useState} from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numValue, setnumValue] = useState(numbers);
  return (
    <div className="flex-num">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numValue.map((num) => {
           return <NumberButton number={num} />  //number is a banana word aka key
       })}
    </div>
  );
};
export default Numbers;


