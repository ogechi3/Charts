import React from "react";
import { IoCalculatorSharp } from "react-icons/io5";

const CreateBudget = () => {
  return (
    <div>
      <div className="items-center w-1/2 mx-auto">
        <IoCalculatorSharp />
        <h1>No Budget Data available yet, start by creating your
            <br /> budget for the year</h1>
            <button className="px-4 py-2 text-blue-500 ring-1">Create Budget</button>
      </div>
    </div>
  );
};

export default CreateBudget;
