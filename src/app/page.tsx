import Chart from "./components/chart";
import { fetchWithCustomHeaders } from "./libs/headers";

export default async function Home() {
  const data = await fetchWithCustomHeaders("http:localhost:3000/api/history");
  const response = await data.json();
  const mapData = Object.values(response.body).map((v: any) => ({
    dateUTC: v.date_utc,
    close: v.close,
  }));

  return (
    <div>
      {JSON.stringify(response.meta)}
      <Chart data={mapData} />
    </div>
  );
}
