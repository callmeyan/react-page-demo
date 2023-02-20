import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

const NODE_ENV = process.env.NODE_ENV, isDEV = NODE_ENV === 'development';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    base: isDEV ? '/' : 'https://callmeyan.github.io/react-page-demo/',
    build: {
        outDir: 'docs'
    }
})
