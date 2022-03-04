const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			minHeight: {
				'layout': 'calc(100vh - 240px)',
			},
		}
	},

	plugins: [],
	darkMode: 'class'
};

module.exports = config;
