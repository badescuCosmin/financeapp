import { updateYAMLFile } from "../libs/updateYaml.js";
import { generateTypeScriptInterfaces } from "../libs/generateInterfaces.js";
// Fetch function
async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/api/history");
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);

    const data = await response.json();

    updateYAMLFile("/api/history", data);
    // Optionally trigger TypeScript interface generation
    generateTypeScriptInterfaces("response.yaml");

    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

// Run the fetch
fetchData();
