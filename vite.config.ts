import react from '@vitejs/plugin-react-swc';
import vike from 'vike/plugin';
import { defineConfig, loadEnv } from 'vite';
import { imagetools } from 'vite-imagetools';
import biomePlugin from 'vite-plugin-biome';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';
import Sitemap from 'vite-plugin-sitemap';
import { svgSpritemap } from 'vite-plugin-svg-spritemap';
import { webfontDownload } from 'vite-plugin-webfont-dl';

// biome-ignore lint/style/noDefaultExport: <explanation>
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      'process.env': env,
    },
    base: env.VITE_BASE_URL || '/',
    cacheDir: 'node_modules/.cache/.vite',
    server: {
      port: mode === 'development' ? 3000 : 8080,
      strictPort: false,
    },
    build: {
      outDir: 'dist',
      cssMinify: 'lightningcss',
      sourcemap: true,
      manifest: true,
    },
    html: {
      cspNonce: 'VITE_NONCE',
    },
    css: {
      transformer: 'lightningcss',
      devSourcemaps: true,
    },
    appType: 'spa',
    plugins: [
      vike({ prerender: true }),
      react({
        jsxImportSource: '@emotion/react',
        plugins: [['@swc/plugin-emotion', {}]],
      }),
      ViteMinifyPlugin({}),
      reactClickToComponent(),
      Sitemap(),
      biomePlugin({
        mode: 'check',
        files: '.',
        applyFixes: true,
        failOnError: false,
      }),
      webfontDownload(
        [
          'https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap',
        ],
        {
          injectAsStyleTag: true,
          minifyCss: true,
          embedFonts: false,
          async: true,
          cache: true,
          proxy: false,
        },
      ),
      imagetools({
        defaultDirectives: (): URLSearchParams => {
          return new URLSearchParams({
            format: 'avif;webp;jpg',
            quality: '75',
          });
        },
        cache: {
          enabled: true,
          dir: 'node_modules/.cache/imagetools',
        },
      }),
      svgSpritemap({
        pattern: 'assets/icons/*.svg',
        prefix: '',
        filename: 'spritemap.svg',
        currentColor: false,
        svgo: true,
        emit: false,
      }),
    ],
  };
});
