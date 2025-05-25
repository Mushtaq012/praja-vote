import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/praja-vote/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3005, // Change to any desired port
  },
});
