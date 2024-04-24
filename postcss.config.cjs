// postcss.config.js
module.exports = {
	plugins: {
		'postcss-nesting': {}, // 添加 postcss-nesting 插件
		autoprefixer: {}, // 保留 autoprefixer 插件
		cssnano: {}, // 添加 cssnano 插件
	},
};
