import { fetchWithCustomHeaders } from "../libs/headers";

async function Dashboard() {
  let data;
  try {
    const response = await fetchWithCustomHeaders(
      "https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history?symbol=SXRV.DE&interval=1mo&diffandsplits=false"
    );

    data = await response.json();
  } catch (er) {
    console.error(er);
  }

  return <p>{data?.meta?.processedTime} verce</p>;
}

export default Dashboard;
