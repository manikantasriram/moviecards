import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // same output folder and dev port as Create React App, so the Vercel settings keep working
  build: { outDir: 'build' },
  server: { port: 3000 },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
