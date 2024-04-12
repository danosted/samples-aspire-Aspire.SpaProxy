import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 5173,
        https: true,
        strictPort: true
    },
    plugins: [react(), mkcert()],
})
