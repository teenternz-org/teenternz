const devPreviewEnv = 'https://teenternz.vercel.app'
const prodEnv = process.env.PROD_URL
const devServer = devPreviewEnv !== 'http://127.0.0.1:3000' ? devPreviewEnv : 'http://127.0.0.1:3000'
export const server = prodEnv;