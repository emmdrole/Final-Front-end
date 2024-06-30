import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 // Import nodePolyfills as named export

export default defineConfig({
  plugins: [
    react(),
   
  ],
});
