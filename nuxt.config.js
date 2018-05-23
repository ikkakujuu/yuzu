const parseArgs = require('minimist');
const argv = parseArgs(process.argv.slice(2), {
	alias: {
		H: 'hostname',
		p: 'port'
	},
	string: ['H'],
	unknown: parameter => false
});

const port = argv.port || process.env.PORT || process.env.npm_package_config_nuxt_port || '3000';
const host = argv.hostname || process.env.HOST || process.env.npm_package_config_nuxt_host || 'localhost';
module.exports = {
	env: {
		baseUrl: process.env.BASE_URL || `http://${host}:${port}`
	},
	head: {
		title: 'Ikkakujū',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: '一角獣 (ikkakujū) means unicorn in Japanese 🦄'
			}
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			}
		]
	},
	loading: { color: '#3B8070' },
	css: ['~/assets/css/main.css'],
	build: {},
	modules: ['@nuxtjs/axios', '~/modules/typescript.js'],
	axios: {}
};
