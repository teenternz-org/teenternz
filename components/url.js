const devPreviewEnv = process.env.DEV_URL
const prodEnv = process.env.PROD_URL
const devEnv = devPreviewEnv !== 'http://127.0.0.1:3000' ? 'https://teenternz.vercel.app' : 'http://127.0.0.1:3000'
export const server = prodEnv;