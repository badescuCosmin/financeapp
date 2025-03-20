import Chart from "./components/chart";
import { fetchWithCustomHeaders } from "./libs/headers";

export type Response = { date_utc: number; close: number };
export default async function Home() {
  const data = await fetchWithCustomHeaders("http:localhost:3000/api/history");
  const response = (await data.json()) as {
    body: Record<string, Response>;
    meta: Record<string, string>;
  };
  const mapData = Object.values(response.body).map((v) => ({
    date_utc: v.date_utc,
    close: v.close,
  }));

  return (
    <div>
      {JSON.stringify(response.meta)}
      <Chart data={mapData} />
    </div>
  );
}
