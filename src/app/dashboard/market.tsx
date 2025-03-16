import { fetchWithCustomHeaders } from "../libs/headers";

export async function Market() {
  let data;
  try {
    const response = await fetchWithCustomHeaders(
      "https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history?symbol=SXRV.DE&interval=1mo&diffandsplits=false"
    );

    data = await response.json();
  } catch (er) {
    console.error(er);
  }

  return <p>{data?.meta?.processedTime}</p>;
}
