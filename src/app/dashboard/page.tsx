import { ClientComponent } from "../clientC";

import { fetchWithCustomHeaders } from "../libs/headers";

async function Dashboard() {
  let data;
  try {
    const response = await fetchWithCustomHeaders(
      "https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history?symbol=SXRV.DE&interval=1mo&diffandsplits=false",
      { next: { revalidate: 60 } }
    );

    data = await response.json();
  } catch (er) {
    console.error(er);
  }

  return (
    <div>
      <p>{data?.meta?.processedTime}</p>
      <ClientComponent />
    </div>
  );
}

export default Dashboard;
