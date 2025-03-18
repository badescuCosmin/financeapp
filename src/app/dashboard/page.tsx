import { Suspense } from "react";
import { ClientComponent } from "../clientC";
import { Api } from "@/myApi";

const api = new Api({
  baseUrl: "http://localhost:3000",
});

async function getData() {
  try {
    const response = await api.api.usersList({
      symbol: "AAPL",
      interval: "1d",
      diffandsplits: "true",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function Dashboard() {
  const data = await getData();

  if (!data) {
    return <p>Error loading data</p>;
  }

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        {data.meta?.exchangeName}
        <ClientComponent />
      </Suspense>
    </div>
  );
}
