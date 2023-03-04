/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: colors.green[400]
			},
			fontFamily: {
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
