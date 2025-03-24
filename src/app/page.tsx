import Chart from "./components/chart";

export default async function Home() {
  // const data = await fetchWithCustomHeaders(
  //   `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history?symbol=VWCE.DE&interval=1mo&diffandsplits=false`
  // );
  // const response = (await data.json()) as {
  //   body: Record<string, Response>;
  //   meta: Record<string, string>;
  // };

  const mapData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <Chart data={mapData} />
    </div>
  );
}
