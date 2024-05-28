import { defineConfig } from 'vite';
// import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
	//js注入css
	plugins: [
		// cssInjectedByJsPlugin({ topExecutionPriority: false }),
		eslintPlugin({
			cache: false,
			fix: true,
		}),
	],
	build: {
		// 自定义 Rollup 配置
		rollupOptions: {
			input: './src/build/dev.js', // 入口文件
			// 输出配置
			output: {
				dir: './', // 输出目录
				entryFileNames: `js/index.js`, // 入口文件名
				chunkFileNames: `js/index.js`, // chunk 文件名
				assetFileNames: `css/index.[ext]`, // 资源文件名
			},
		},
	},
	cssCodeSplit: true, // 开启 CSS 代码拆分
});
