'use client'




import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';


import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemaTypes';
import { structure } from './sanity/structure';


if (!projectId) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
}

if (!dataset) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
}

export default defineConfig({
  basePath: '/studio',
  projectId,         
  dataset,          
  schema,             
  plugins: [
    structureTool({ structure }), 
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
