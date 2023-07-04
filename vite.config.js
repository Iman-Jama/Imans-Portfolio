import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ throwIfNamespace: false }), svgrPlugin()],
  jsx: {
    factory: 'React.createElement',
    fragment: 'React.Fragment'
  }
});

