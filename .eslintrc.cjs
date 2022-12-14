module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': 'vue-eslint-parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module',
	},
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'indent': ['error', 2],
		'quotes': ['error', 'single'],
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"vue/multi-word-component-names": "off",
	}
}
