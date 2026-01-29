import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                career: resolve(__dirname, 'career.html'),
                research: resolve(__dirname, 'research.html'),
            },
        },
    },
});
