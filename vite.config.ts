import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
const transformIndexHtml = (code) => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return code.replace(/__INDEX__/, '<base href="//cloudstatic.sundray.com.cn">') // 生产环境
    default:
      return code.replace(/__INDEX__/, '<base href="//cloud.sundray.com.cn">') // 开发环境
  }
}
// import { createHtmlPlugin } from 'vite-plugin-html'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'demo-transform',
      enforce: 'pre',
      // vite build is production will not invoke `transformIndexHtml`
      transform (code, id) {
        if (id.endsWith('.html')) {
          return { code: transformIndexHtml(code), map: null }
        }
      },
      transformIndexHtml
    },
    vue(),
    vueJsx(),
    eslintPlugin({
      cache: false,
      emitWarning: false
    })
    // createHtmlPlugin({
    //   inject: {
    //     data: {
    //       injectScript: '<base href="//cloudstatic.sundray.com.cn">'
    //     }
    //   }
    // })
  ],
  optimizeDeps: {
    exclude: ['__INDEX__'] // 排除 __INDEX__
  },
  base: './',
  server: {
    port: 8000,
    https: false,
    host: '0.0.0.0',
    proxy: {
      // string shorthand
      // with options
      '/api': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    hmr: {
      host: '0.0.0.0',
      protocol: 'ws'
      // clientPort: 8001
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        imain: path.resolve(__dirname, 'i-index.html')
      }
    }
  }
})
