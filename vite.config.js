import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  resolve: {
    alias: {
      '@context': path.resolve(__dirname, './src/context'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@images': path.resolve(__dirname, './src/images'),      
      '@products': path.resolve(__dirname, './src/products'),
      '@services': path.resolve(__dirname, './src/services'),      
      '@helper': path.resolve(__dirname, './src/helper'),
    },
  },
})
