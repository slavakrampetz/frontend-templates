import {defineConfig, UserConfig} from 'vite'

// import postcssNesting from 'postcss-nesting'
// import postcssMixins from 'postcss-mixins'
// import postcssVars from 'postcss-simple-vars'

import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/

// const path = process.cwd();

const srcPath = `./src/`;

const config: UserConfig = {

	base: './',
	root: './src/',
	publicDir: 'public',

	build: {

		outDir: './dist/',
		emptyOutDir: true,
		minify: false,
		manifest: false,
		target: 'es2018',
		reportCompressedSize: false,

		rollupOptions: {
			input: './app/main.ts',
			output: {
				entryFileNames: 'main.js',
				dir: './out/',
				format: 'module',
				inlineDynamicImports: true,
			}
		},
	}, // build
	resolve: {
		alias: {
			'@shared': `${srcPath}shared/`,
		},
	},

	server: {
		// host: ''
		strictPort: true,
		port: 3000,
	},

	plugins: [
		svelte({
			preprocess: [
				sveltePreprocess({
					typescript: true,
				}),
			],
		}),
	],

	// css: {
	// 	postcss: {
	// 		plugins: [
	// 			postcssNesting(),
	// 			postcssMixins(),
	// 			postcssVars,
	// 		]
	// 	}
	// },
}

export default defineConfig(config)
