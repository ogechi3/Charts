import React from "react";

const Filter = () => {
  return (
    <div className="absolute z-20 bg-white rounded-lg p-5 w-max  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex justify-between">
        <h1>Filter</h1>
        <h1>Apply</h1>
      </div>
      <div className="space-y-2">
        {data.map((name, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 border-b border-gray-400 cursor-pointer text-[#273043]"
          >
            <input type="checkbox" value={name} className="w-4 h-4 " />
            <span> {name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
const data = [
  "Top Performing schools",
  "A to Z",
  "Deficit(-)",
  "Surplus(+)",
  "Highest Funding=",
];

export default Filter;
