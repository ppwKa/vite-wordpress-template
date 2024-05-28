import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

globals.browser.jQuery = 'readonly';
globals.browser.Swiper = 'readonly';
globals.browser.gsap = 'readonly';
export default [
	//使用@eslint/js规则
	pluginJs.configs.recommended,
	//启用prettier/prettier规则。
	eslintPluginPrettierRecommended,
	//关闭eslint与prettier冲突的规则
	eslintConfigPrettier,
	{
		rules: {
			'prettier/prettier': 'error',
			'no-unused-vars': 'off',
			'no-undef': 'error',
		},
		languageOptions: {
			globals: globals.browser,
		},
	},
];
