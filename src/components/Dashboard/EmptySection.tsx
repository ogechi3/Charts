import React, { useState } from "react";
import Navbar from "../Navbar";
import { BiUpArrowCircle } from "react-icons/bi";
import CreateBudget from "./CreateBudget";
import { IoCalculatorSharp } from "react-icons/io5";
import BudgetModal from "./BudgetModal";
import { CiCirclePlus } from "react-icons/ci";

const EmptySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="z-10 w-full gap-8 space-y-5 lg:px-5 lg:grid lg:grid-cols-4 ">
        {CARDS.map((card) => (
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
                <p>
                  <BiUpArrowCircle /> <span>{card.percent}</span>
                </p>
              </div>
              <span className="text-[#828282] font-medium text-[12px]">
                {card.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center h-screen mx-auto">
        <IoCalculatorSharp size={54} />
        <h1 className="items-center text-gray-500">
          No Budget Data available yet, start by creating your
          <br className="text-center" /> budget for the year
        </h1>
        <button
          className="px-8 py-2 text-blue-500 cursor-pointer ring-1 ring-gray-600"
          onClick={() => setIsOpen(true)}
        >
          Create Budget
        </button>
        <BudgetModal open={isOpen} onClose={() => setIsOpen(false)}>
          <h1 className="text-3xl font-bold leading-6 text-center">
            Create Budget Plan{" "}
          </h1>
          <p className="">
            Record and check state level educational expenditure accross varoius
            categories
          </p>

          <form>
            <div className="flex flex-row gap-4">
              <div className="">
                <div className="flex flex-col gap-4">
                  <label className="font-bold">Budget Name</label>
                  <input
                    type="text"
                    placeholder="E.g 2024 Eduction Budget"
                    className="p-2 px-8 bg-[#F9F9F9] text-[#ACACAC]"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label className="font-bold">Allocated Amount</label>
                  <input
                    type="text"
                    placeholder="Enter amount"
                    className="p-2 px-8 bg-[#F9F9F9] text-[#ACACAC]"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label className="font-bold">Budget Period</label>
                  <input
                    type="date"
                    placeholder="Select Year"
                    className="p-2 px-8 bg-[#F9F9F9] text-[#ACACAC]"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label className="font-bold">Budget Status</label>
                  <input
                    type="select"
                    placeholder="Select Status"
                    className="p-2 px-8 bg-[#F9F9F9] text-[#ACACAC]"
                  />
                </div>
              </div>

              <div className="">
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="font-bold">
                    Budget Category
                  </label>
                  <input
                    type="text"
                    placeholder="Select Category"
                    className="p-2 px-8 bg-[#F9F9F9] text-[#ACACAC]"
                  />
                </div>

                <div className="w-full max-w-md mx-auto">
                  <label
                    htmlFor="file Upload"
                    className="flex-col items-center justify-center p-10 text-center transition border-2 border-gray-400 border-dashed cursor-pointer rounded-xl hover:border-blue-500"
                  >
                    <CiCirclePlus className="w-10 h-10 mb-2 text-gray-500" />
                    <p>Upload</p>
                  </label>
                  <input id="file-upload" type="file" className="hidden" />
                </div>
              </div>
            </div>
          </form>
        </BudgetModal>
      </div>
    </div>
  );
};

interface cards {
  title: string;
  amount: string;
  subtitle: string;
  percent: string;
}

const CARDS: cards[] = [
  {
    title: "Total Funds Allocated",
    amount: "₦500,756,000",
    subtitle: "From Prev Year",
    percent: "+12%",
  },
  {
    title: "State Level Spending",
    amount: "₦50,075,600",
    subtitle: "From total funds",
    percent: "+12%",
  },
  {
    title: "State Revenue",
    amount: "₦0",
    subtitle: "",
    percent: "",
  },
  {
    title: "% of Budget Utilized",
    amount: "%",
    subtitle: "",
    percent: "",
  },
];

export default EmptySection;
