import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
const resolve = (dir: string) => path.join(__dirname, dir);

// 组件库按需引入
import Components from 'unplugin-vue-components/vite'; // 新增
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; // 引入ElementPlusResolver

const fePort = 3030;
// const serverOrigin = 'http://localhost:9999'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({ resolvers: [ElementPlusResolver()] }) // 添加配置
  ],
  resolve: {
    alias: {
      '@': resolve('src') // 取相对路径别名, @表示当前的src目录路径
    }
  },
  // 服务器设置
  server: {
    cors: true, // 默认启用并允许·任何源
    // host: "0.0.0.0", // 指定服务器主机名
    port: fePort, // 指定服务端口号
    open: true, // 运行自动打开浏览器
    // https: false, // 关闭https
    strictPort: true // 若3030端口被占用,直接结束项目
    // proxy: {
    //   // 选项写法
    //   "^/api": {
    //     target: serverOrigin,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, "/api"),
    //   },
    // },
  },
  // 打包相关规则
  build: {
    target: 'modules', //指定es版本,浏览器的兼容性
    outDir: 'dist', //指定打包输出路径
    assetsDir: 'assets', //指定静态资源存放路径
    cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
    sourcemap: false, //是否构建source map 文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
