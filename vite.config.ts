import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src', 'index.ts'),
      name: 'Momentum Modal',
      fileName: 'momentum-modal-react',
    },
    rollupOptions: {
      // jsx-runtime must stay external, or React's element format gets bundled and breaks across React majors
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime', '@inertiajs/react', '@inertiajs/core'],
    },
  },
  plugins: [
    react(),
    dts({
      outDir: 'dist/types',
    }),
  ],
});
