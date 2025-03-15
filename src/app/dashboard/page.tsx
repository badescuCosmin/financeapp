"use client";
import useSWR from "swr";

function Dashboard() {
  const { data, error } = useSWR(
    "https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history?symbol=SXRV.DE&interval=1mo&diffandsplits=false",
    (url) =>
      fetch(url, {
        headers: {
          "x-rapidapi-key":
            "84879a7769msh64cb5f65dfb5239p1fa434jsnfb961cfff684",
          "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
        },
      }).then((res) => res.json())
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>This is the dashboard page</h1>
      <div>
        <h2>{data.quoteResponse.result[0].shortName}</h2>
        <p>Price: {data.quoteResponse.result[0].regularMarketPrice}</p>
      </div>
    </div>
  );
}

export default Dashboard;
