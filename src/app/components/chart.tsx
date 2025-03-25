"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  TooltipProps,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import { FC } from "react";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

const TooltipContent = ({ p }: { p: TooltipProps<ValueType, NameType> }) => {
  if (p && p.payload) {
    const values = p.payload[0]?.payload;
    console.log(values);
    return (
      <div className="bg-white p-4 text-black border-[0.1px] border-black shadow-gray-100">
        <p>Date: {values?.date}</p>
        <p>Open: {values?.open}</p>
        <p>Close: {values?.close}</p>
        <p>High: {values?.high}</p>
        <p>Low: {values?.low}</p>
      </div>
    );
  }
};
interface ChartProps {
  data: Array<{
    date: string;
    date_utc: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    adjclose: number;
  }>;
}
const Chart: FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={500}>
      <AreaChart data={data}>
        <Area
          type="monotone"
          dataKey="close"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip
          content={(p) => <TooltipContent p={p} />}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
