import { Suspense } from "react";
import { ClientComponent } from "../clientC";

import { fetchWithCustomHeaders } from "../libs/headers";

async function Dashboard() {
  const response = await fetchWithCustomHeaders(
    "https://yahoo-finance15.p.rapidapi.scom/api/v1/markets/stock/history?symbol=SXRV.DE&interval=1mo&diffandsplits=false",
    { next: { revalidate: 60 } }
  );

  const data = await response.json();
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <p>{data?.meta?.processedTime}</p>
      </Suspense>

      <ClientComponent />
    </div>
  );
}

export default Dashboard;
