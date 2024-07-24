import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssests:['favicon.svg'],
        injectRegister: 'auto',
        devOptions: {
          enabled: true
        },
        manifest: {
          "short_name": "ویدان - crm",
          "name": "پنل crm ویدان",
          "icons": [
            {
              "src": "/favicon.svg",
              "sizes": "64x64 32x32 24x24 16x16",
              "type": "image/x-icon"
            }
          ],
          "start_url": "/",
          "display": "standalone",
          "theme_color": "#000000",
          "background_color": "#ffffff"
        }
      })
  ],
})
