"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  Legend,
} from "recharts";

import { FC } from "react";

interface ChartProps {
  data: Array<{ name: string; uv: number; pv: number }>;
}

const Chart: FC<ChartProps> = ({ data }) => {
  // const xAFormatted = (date: number) =>
  //   new Date(date).toLocaleDateString("en-GB");

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Chart;
