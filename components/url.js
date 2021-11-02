const devPreviewEnv = process.env.DEV_URL
const prodEnv = process.env.PROD_URL
const devEnv = devPreviewEnv !== 'http://127.0.0.1:3000' ? process.env.PREVIEW_URL : 'http://127.0.0.1:3000'
export const server = devEnv;