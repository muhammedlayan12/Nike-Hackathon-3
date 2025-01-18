import { createClient } from 'next-sanity';



import { apiVersion, dataset, projectId } from '../env';



if (!projectId || !dataset) {
  throw new Error(
    'Missing required environment variables: NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET'
  );
}



export const client = createClient({
  projectId,    
  
  dataset,          
  
  apiVersion,       
  
  useCdn: true,     
  
});
