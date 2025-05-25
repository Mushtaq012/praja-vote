import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/praja-vote/', // Must match GitHub repo name
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
