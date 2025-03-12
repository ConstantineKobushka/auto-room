import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    mimeTypes: {
      woff: 'font/woff',
      woff2: 'font/woff2',
    },
  },
});
