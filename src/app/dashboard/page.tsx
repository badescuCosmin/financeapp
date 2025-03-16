import { fetchWithCustomHeaders } from "../libs/headers";

async function Dashboard() {
  const response = await fetchWithCustomHeaders(
    "https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history?symbol=SXRV.DE&interval=1mo&diffandsplits=false"
  );

  const data = await response.json();

  console.log(data, "data");

  return <p>{data?.meta?.processedTime}</p>;
}

export default Dashboard;
