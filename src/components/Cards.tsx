import React from 'react'
import { BiUpArrowCircle } from 'react-icons/bi';
import ChartToggle from './ChartToggle';
import DonutChart from './PieChart';

const Cards = () => {
  return (
    <div className="px-4 ">
      <div className="z-10 w-full gap-8 space-y-5 lg:px-5 lg:grid lg:grid-cols-4 ">
        {cards.map((card) => (
          <div
            key={card.title}
            className=" p-5 pr-20 bg-white text-[#273043] items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md "
          >
            <p className="font-medium text-[14px] leading-5 text-[#828282]">
              {card.title}
            </p>
            <h1 className="text-2xl font-bold">{card.amount}</h1>
            <div className="flex flex-row items-center gap-3 ">
              <div className="flex flex-row items-center p-1 bg-[#E0ECFC] rounded-[4px]">
                <BiUpArrowCircle/>
                +12%
              </div>
              <span className="text-[#828282] font-medium text-[12px]">
                {card.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid items-center grid-cols-1 gap-4 px-8 lg:grid-cols-2">
        <ChartToggle/>
        <DonutChart/>
      </div>
    </div>
  );
}

interface CARDS {
  title: string;
  amount: string;
  subtitle: string;
}

const cards: CARDS[] = [
  {
    title: "Total Funds Allocated",
    amount: "₦500,756,000",
    subtitle: "From Prev Year",
  },
  {
    title: "State Level Spending",
    amount: "₦50,075,600",
    subtitle: "From total funds",
  },
  {
    title: "State Revenue",
    amount: "₦13,048,000",
    subtitle: "Year to Date",
  },
  {
    title: "% of Budget Utilized",
    amount: "57.67%",
    subtitle: "Year to Date",
  },
];

export default Cards
