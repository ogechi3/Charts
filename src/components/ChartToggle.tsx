"use client";
import React, { useState } from "react";
import { FaChartLine } from "react-icons/fa";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DonutChart from "./PieChart";

const ChartToggle = () => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");
  return (
    <div className="">
      <h1 className="m-5 text-base font-bold leading-5 text-center md:text-xl md:text-left">
        Budget Breakdown
      </h1>

      <div className=" bg-white rounded-md ring-1 ring-slate-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-100% ">
        <div className="flex flex-row items-center justify-between ">
          <div className="font-bold">
            ₦ <br /> Million{" "}
          </div>
          <div className="flex flex-row space-x-4">
            <button
              className={`px-4 py-2 flex flex-row items-center gap-1 rounded cursor-pointer ${
                chartType === "bar" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setChartType("bar")}
            >
              <span>
                <HiOutlineChartSquareBar />
              </span>
              Bar Chart
            </button>
            <button
              className={`px-4 py-2 flex flex-row items-center gap-1 rounded cursor-pointer ${
                chartType === "line" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setChartType("line")}
            >
              <span>
                <FaChartLine />
              </span>
              Line Chart
            </button>
          </div>
        </div>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "bar" ? (
              <BarChart width={800} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />

                <Bar
                  dataKey="value1"
                  stackId="a"
                  fill="#0077B6"
                  barSize={20}
                  radius={[10, 10, 0, 0]}
                />
                <Bar
                  dataKey="value2"
                  stackId="a"
                  fill="#F3F3F3"
                  barSize={20}
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            ) : (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="value1" stroke="#8884d8" />
                <Line type="monotone" dataKey="value2" stroke="#8884d8" />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
      {/* <div className="">
          <DonutChart />
        </div> */}
    </div>
  );
};

interface DATA {
  name: string;
  value1: string;
  value2: string;
}

const data: DATA[] = [
  {
    name: "Salaries",
    value1: "300",
    value2: "500",
  },
  {
    name: "Schools",
    value1: "700",
    value2: "200",
  },
  {
    name: "Recurrent Expenses",
    value1: "300",
    value2: "400",
  },
  {
    name: "Current Expenses",
    value1: "700",
    value2: "200",
  },
  {
    name: "Projects",
    value1: "300",
    value2: "400",
  },
];

export default ChartToggle;
