"use client";
import Chart from "./components/chart";
import { mockData } from "./libs/mockData";

export type Response = { date_utc: number; close: number };
export default async function Home() {
  // const data = await fetchWithCustomHeaders(
  //   `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history?symbol=VWCE.DE&interval=1mo&diffandsplits=false`
  // );
  // const response = (await data.json()) as {
  //   body: Record<string, Response>;
  //   meta: Record<string, string>;
  // };
  const mapData = Object.values(mockData.body).map((v) => ({
    date_utc: v.date_utc,
    close: v.close,
  }));

  return (
    <div>
      <Chart data={mapData} />
    </div>
  );
}
