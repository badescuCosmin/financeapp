import { exec } from "child_process";

export function generateTypeScriptInterfaces(yamlFile) {
  const command = ` npx swagger-typescript-api -p ${yamlFile}`;
  exec(command, (error) => {
    if (error) {
      console.error("Error generating TypeScript interfaces:", error);
      return;
    }
    console.log("TypeScript interfaces generated: interfaces.ts");
  });
}
