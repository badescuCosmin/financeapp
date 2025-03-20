"use client";

import { LineChart } from "@mui/x-charts/LineChart";

interface IData {
  dateUTC: string;
  close: number;
}

function Chart({ data }: { data: IData[] }) {
  const xAFormatted = (date: any) => new Date(date).toLocaleDateString("en-GB");

  return (
    <LineChart
      dataset={[...data] as any}
      xAxis={[
        {
          dataKey: "dateUTC",
          valueFormatter: (value) => xAFormatted(Number(`${value}000`)),

          hideTooltip: true,
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
