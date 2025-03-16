import { fetchWithCustomHeaders } from "@/app/libs/headers";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const symbol = url.searchParams.get("symbol") || "SXRV.DE";
  const interval = url.searchParams.get("interval") || "1mo";
  const diffAndSplits = url.searchParams.get("diffandsplits") || "false";

  const response = await fetchWithCustomHeaders(
    `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history?symbol=${symbol}&interval=${interval}&diffandsplits=${diffAndSplits}`
  );
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
  const { name } = body;

  // e.g. Insert new user into your DB
  const newUser = { id: Date.now(), name };

  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
