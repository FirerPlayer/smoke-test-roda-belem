/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					100: '#dff2e1',
					200: '#bfe4c2',
					300: '#9ed7a4',
					400: '#7ec985',
					500: '#5ebc67',
					600: '#4b9652',
					700: '#38713e',
					800: '#264b29',
					900: '#132615'
				}
			}
		}
	},
	plugins: [],
	darkMode: 'class'
};
