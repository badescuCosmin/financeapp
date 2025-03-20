"use client";

import { LineChart } from "@mui/x-charts/LineChart";
import { Response } from "../page";

function Chart({ data }: { data: Response[] }) {
  const xAFormatted = (date: number) =>
    new Date(date).toLocaleDateString("en-GB");

  return (
    <LineChart
      dataset={data}
      xAxis={[
        {
          dataKey: "date_utc",
          valueFormatter: (value) => xAFormatted(Number(`${value}000`)),
        },
      ]}
      series={[
        {
          id: "Close",
          label: "Close",
          dataKey: "close",
          showMark: false,
        },
      ]}
      width={1500}
      height={400}
    />
  );
}

export default Chart;
