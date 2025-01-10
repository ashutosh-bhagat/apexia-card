import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "zrc3sp6f",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

