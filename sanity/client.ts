import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "fnu9sjgm",
  dataset: "prod",
  apiVersion: "2024-01-01",
  useCdn: false,
});