/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./sections/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	fontFamily: {
		custom: ['Nunito', 'sans'],
		// serif: ['Merriweather', 'serif'],
	},
	plugins: [],
};

// ...defaultTheme.fontFamily.sans
