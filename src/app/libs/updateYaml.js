import fs from "fs";
import yaml from "js-yaml";

const yamlFile = "response.yaml";

// Update YAML file with new endpoint data
export function updateYAMLFile(endpoint, data) {
  let openAPI;

  // Load existing YAML file or create a new one
  if (fs.existsSync(yamlFile)) {
    openAPI = yaml.load(fs.readFileSync(yamlFile, "utf8"));
  } else {
    openAPI = {
      openapi: "3.0.3",
      info: {
        title: "Consolidated API Documentation",
        description: "All API requests in one OpenAPI file.",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:3000/",
          description: "API Server",
        },
      ],
      paths: {},
    };
  }

  // Add or update the endpoint with the new data
  openAPI.paths[endpoint] = {
    get: {
      summary: `Response data for ${endpoint}`,
      responses: {
        200: {
          description: `Successful response for ${endpoint}`,
          content: {
            "application/json": {
              schema: yaml.dump(data),
            },
          },
        },
      },
    },
  };

  // Save the updated YAML file
  fs.writeFileSync(yamlFile, yaml.dump(openAPI), "utf8");
  console.log(`Updated YAML file with ${endpoint}: ${yamlFile}`);
}
