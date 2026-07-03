import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', 
  build: {
    outDir: 'dist', // বিল্ড ফাইল কোথায় থাকবে
    emptyOutDir: true, // নতুন বিল্ডের আগে পুরনো ফাইল মুছে ফেলবে
  },
  server: {
    port: 5173
  }
});