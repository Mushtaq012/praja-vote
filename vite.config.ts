import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/praja-vote/', // Correct base for GitHub Pages
  plugins: [react()],
  server: {
    port: 3005,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
