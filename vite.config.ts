import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // Keep this as '/' for custom domain
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Use 'iife' format instead of 'es' to avoid module script issues
        format: 'iife',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name;
          if (!name) return 'assets/[name]-[hash][extname]';
          if (name.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (name.match(/\.(mp4|webm|ogg)$/)) {
            return 'assets/videos/[name]-[hash][extname]';
          }
          if (name.match(/\.(css)$/)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
}));