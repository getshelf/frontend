import { defineConfig } from "orval";

export default defineConfig({
  petstore: {
    output: {
      mode: "single",
      target: "./src/getshelf.ts",
      schemas: "./src/model",
      client: "fetch",
      httpClient: "fetch",
    },
    input: {
      target: "http://localhost:8080/openapi.json",
    },
  },
});
