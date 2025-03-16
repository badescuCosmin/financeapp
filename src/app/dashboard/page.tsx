"use client";
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users?interval=1d");
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return <p>Test</p>;
}

export default Dashboard;
