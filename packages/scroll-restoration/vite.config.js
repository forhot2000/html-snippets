import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'pages/index': resolve(__dirname, 'index.html'),
        'pages/react': resolve(__dirname, 'react.html'),
        'pages/vue': resolve(__dirname, 'vue.html'),
        'pages/about': resolve(__dirname, 'about.html'),
      },
      output: {
        manualChunks: {
          'lib/react': ['react', 'react-dom'],
          'lib/vue': ['vue'],
          // 'lib/history-restoration': ['src/historyRestoration.js'],
          // 'lib/history-restoration-react': ['src/useHistoryRestoration.js'],
        },
      },
    },
  },
  plugins: [vue()],
});
