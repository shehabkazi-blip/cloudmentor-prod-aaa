import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // এই লাইনটি যোগ করুন
  server: {
    port: 5173
  }
});