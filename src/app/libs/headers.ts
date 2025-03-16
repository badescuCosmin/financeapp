const customHeaders = {
  "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
  "x-rapidapi-key": process.env.RAPIDAPI_KEY as string,
};

export const fetchWithCustomHeaders = async (
  url: string,
  options: RequestInit = {}
) => {
  const response = await fetch(url, {
    ...options,
    headers: customHeaders,
  });

  return response;
};
