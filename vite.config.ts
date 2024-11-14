import react from '@vitejs/plugin-react-swc';
import vike from 'vike/plugin';
import { defineConfig, loadEnv } from 'vite';
import { imagetools } from 'vite-imagetools';
import biomePlugin from 'vite-plugin-biome';
import hashedFaviconsPlugin from 'vite-plugin-hashed-favicons';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import ogPlugin from 'vite-plugin-open-graph';
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
      Sitemap(),
      reactClickToComponent(),
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
      svgSpritemap({
        pattern: 'assets/icons/*.svg',
        prefix: '',
        filename: 'spritemap.svg',
        currentColor: false,
        svgo: true,
        emit: false,
      }),
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
      hashedFaviconsPlugin('assets/icons/vike.svg', {
        version: '1.0',
        lang: 'en-US',
        appName: 'vite-react-ts',
        appShortName: 'vite-react-ts',
        appDescription: 'the starting template of the project',
        developerName: 'Oleksandr Pishta',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        developerURL: 'https://livegp.github.io',
        scope: '/',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        start_url: '/?homescreen=1',
        loadManifestWithCredentials: false,
        manifestMaskable: true,
        manifestRelativePaths: false,
        background: '#fff',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        theme_color: '#fff',
        appleStatusBarStyle: 'black-translucent',
        cacheBustingQueryParam: null,
        dir: 'auto',
        display: 'standalone',
        orientation: 'any',
        preferRelatedApplications: false,
        relatedApplications: undefined,
        // biome-ignore lint/style/useNamingConvention: <explanation>
        pixel_art: false,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          windows: true,
          yandex: true,
        },
      }),
      ogPlugin({
        basic: {
          title: 'vike-react-ts',
          type: 'image.png',
          image: {
            url: 'https://livegp.github.io/vike-react-ts/vike.png',
            // secureUrl: undefined,
            type: 'image/png',
            width: 900,
            height: 440,
            alt: 'Vike Image',
          },
          url: 'https://livegp.github.io/vike-react-ts/',
          description: 'the starting template of the project',
          determiner: 'auto',
          locale: 'en_US',
          localeAlternate: ['en_US', 'ru_RU'],
          siteName: 'vike-react-ts',
          // video: undefined,
        },
        twitter: {
          card: 'summary_large_image',
          site: '@live_gp',
          siteId: '118488504',
          creator: '@live_gp',
          creatorId: '118488504',
          description: 'the starting template of the project',
          title: 'vike-react-ts',
          image: 'https://livegp.github.io/vike-react-ts/vike.png',
          imageAlt: 'Vike Image',
          // player: undefined,
          // playerWidth: undefined,
          // playerHeight: undefined,
          // playerStream: undefined,
          // app: {
          //   name: {
          //     iphone: undefined,
          //     ipad: undefined,
          //     googleplay: undefined,
          //   },
          //   id: {
          //     iphone: undefined,
          //     ipad: undefined,
          //     googleplay: undefined,
          //   },
          //   url: {
          //     iphone: undefined,
          //     ipad: undefined,
          //     googleplay: undefined,
          //   },
          // },
        },
        facebook: {
          appId: 100000506117116,
        },
      }),
    ],
  };
});
