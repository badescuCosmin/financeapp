import Chart from "./components/chart";
import { mockData } from "./libs/mockData";

export default async function Home() {
  // const data = await fetchWithCustomHeaders(
  //   `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history?symbol=VWCE.DE&interval=1mo&diffandsplits=false`
  // );
  // const response = (await data.json()) as {
  //   body: Record<string, Response>;
  //   meta: Record<string, string>;
  // };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chart data={Object.values(mockData.body)} />
    </div>
  );
}
