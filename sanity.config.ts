// 'use client'




// import { visionTool } from '@sanity/vision';
// import { defineConfig } from 'sanity';
// import { structureTool } from 'sanity/structure';


// import { apiVersion, dataset, projectId } from './sanity/env';
// import { schema } from './sanity/schemaTypes';
// import { structure } from './sanity/structure';


// if (!projectId) {
//   throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
// }

// if (!dataset) {
//   throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
// }

// export default defineConfig({
//   basePath: '/studio',
//   projectId,         
//   dataset,          
//   schema,             
//   plugins: [
//     structureTool({ structure }), 
//     visionTool({ defaultApiVersion: apiVersion }),
//   ],
// });










'use client'

import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';

import {schema} from './sanity/schemaTypes/';
import {structure} from './sanity/structure';
 
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'lc1sx5h6';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2023-01-01'; 

export default defineConfig({
  basePath: '/studio',
  projectId,    
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
});

