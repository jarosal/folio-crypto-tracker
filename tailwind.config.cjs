const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			minHeight: {
				'layout': 'calc(100vh - 240px)',
			},
			colors: {
				'eggshell': {
					50: '#F9F1DC'
				},
				'mustard': {
					200: '#FFCB69',
					800: '#8F5D00'
				},
				'lavender': {
					700: '#854768',
					800: '#77405E'
				},
				'flame': {
					300: '#FF475A'
				},
				'olive': {
					500: '#7CB06D'
				},
				'eerie': {
					900: '#191919'
				},
				'raisin': {
					700: '#2C262C',
					800: '#221C22'
				}
			},
			fontFamily: {
				lato: ["Lato", "sans-serif"],
				karma: ["Karma", "multi-script"]
			}
		}
	},

	plugins: [],
	darkMode: 'class'
};

module.exports = config;
