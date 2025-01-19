import { createClient } from 'next-sanity';

// Fetching environment variables directly from process.env
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

if (!projectId || !dataset || !apiVersion) {
  throw new Error(
    'Missing required environment variables: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, or NEXT_PUBLIC_SANITY_API_VERSION'
  );
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, 
});
