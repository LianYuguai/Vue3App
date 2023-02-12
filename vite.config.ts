import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// mock服务
import { viteMockServe } from 'vite-plugin-mock'
// icon
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
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
    }),
    viteMockServe({
      // ↓解析根目录下的mock文件夹
      mockPath: 'mock',
      localEnabled: true, // 开发打包开关
      prodEnabled: false, // 生产打包开关
      supportTs: false, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      watchFiles: true // 监视文件更改
    }),
    // createHtmlPlugin({
    //   inject: {
    //     data: {
    //       injectScript: '<base href="//cloudstatic.sundray.com.cn">'
    //     }
    //   }
    // })
    // ...
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: 'Icon'
        }),
        ElementPlusResolver()
      ]
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep']
        }),
        ElementPlusResolver()
      ]
    }),
    Icons({
      autoInstall: true
    })
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
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
