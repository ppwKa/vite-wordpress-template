// src/build/build.js
import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';

// 删除dist目录
fse.removeSync('./dist');
// 创建dist目录
fs.mkdirSync('./dist');

const excludedFiles = [
	'node_modules',
	'dist',
	'src',
	'public',
	'package-lock.json',
	'package.json',
	'.git',
	'.gitignore',
	'vite.config.js',
	'tsconfig.json',
	'README.md',
	'yarn.lock',
	'vite.svg',
	'index.html',
	'.prettierignore',
	'.prettierrc.cjs',
	'eslint.config.js',
	'postcss.config.cjs',
];

const copyDirectories = (source, destination) => {
	fs.readdirSync(source, { withFileTypes: true }).forEach((entry) => {
		const fullsrc = path.resolve(source, entry.name);
		const fulldest = path.resolve(destination, entry.name);
		if (!excludedFiles.includes(entry.name)) {
			if (entry.isDirectory() && fullsrc !== destination) {
				fse.copySync(fullsrc, fulldest);
			} else if (!entry.isDirectory()) {
				fse.copySync(fullsrc, fulldest);
			}
		}
	});
};

// 使用示例
copyDirectories('./', './dist');
