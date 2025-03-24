"use client";

import { XAxis, YAxis, CartesianGrid, Line, LineChart } from "recharts";

import { FC } from "react";

interface ChartProps {
  data: Array<{ name: string; uv: number; pv: number }>;
}

const Chart: FC<ChartProps> = ({ data }) => {
  // const xAFormatted = (date: number) =>
  //   new Date(date).toLocaleDateString("en-GB");

  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Chart;
