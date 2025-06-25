import React from "react";

const CategoryLabel = () => {
  return (
    <div className="grid grid-cols-2 gap-5 py-2 pr-7 ">
      {list.map((item) => (
        <div key={item.id} className="flex flex-row gap-3">
          <div
            className={`w-8 h-20 `}
            style={{ backgroundColor: item.color }}
          ></div>
          <div className="">
            <div className="font-light text-[10px] lg:text-[14px]">
              {item.name}{" "}
              <span style={{ color: item.color }}>{item.percentage}</span>
            </div>
            <div className="font-bold  text-[10px] md:text-base">
              {item.value}
            </div>
            <div
              className="font-light text-[10px] rounded-md hidden md:flex"
              style={{ backgroundColor: item.button }}
            >
              {item.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

interface LIST {
  id: number;
  name: string;
  percentage: string;
  color: string;
  value: string;
  status: string;
  button: string;
}

const list: LIST[] = [
  {
    id: 1,
    name: "Salaries",
    percentage: "40%",
    color: "#8A70EF",
    value: "₦13,048,000",
    status: "Under Budget",
    button: "#E0ECFC",
  },
  {
    id: 2,
    name: "Infrastructure",
    percentage: "40%",
    color: "#56CCF2",
    value: "₦13,048,000",
    status: "Over Budget",
    button: "#EB575733",
  },
  {
    id: 3,
    name: "Projects",
    percentage: "40%",
    color: "#2F80ED",
    value: "₦13,048,000",
    status: "Over Budget",
    button: "#EB575733",
  },
  {
    id: 4,
    name: "Education Materials",
    percentage: "40%",
    color: "#27AE60",
    value: "₦13,048,000",
    status: "Under Budget",
    button: "#E0ECFC",
  },
];
export default CategoryLabel;
