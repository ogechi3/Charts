import React from 'react'

const Label = () => {
  return (
    <div className="flex flex-col gap-2 p-2 first:pt-3 ">
      {list.map((rods) => (
        <div key={rods.id} className="flex flex-row gap-3">
          <div
            className={`w-2 h-20 `}
            style={{ backgroundColor: rods.color }}
          ></div>
          <div className="flex flex-col ">
            <div className="font-light">
              {rods.name}{" "}
              <span style={{ color: rods.color }}>{rods.percentage}</span>
            </div>
            <div className="font-bold text-[10px] md:text-base">
              {rods.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

interface LIST {
  id: number;
  name: string;
  percentage: string;
  color: string;
  value: string;
}

const list: LIST[] = [
  {
    id: 1,
    name: "Tax",
    percentage: "40%",
    color: "#8A70EF",
    value: "₦13,048,000",
  },
  {
    id: 2,
    name: "Donations",
    percentage: "20%",
    color: "#56CCF2",
    value: "₦13,048,000",
  },
  {
    id: 3,
    name: "Federal Allocations",
    percentage: "40%",
    color: "#2F80ED",
    value: "₦13,048,000",
  },
];
    
  
  
export default Label
