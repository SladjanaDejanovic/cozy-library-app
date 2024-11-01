/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#F7F4EC",
					100: "#E2E1CF",
					200: "#CBCCB8",
					300: "#B3B7A2",
					400: "#9CA28B",
					500: "#848E74",
					600: "#6C795D",
					700: "#556446",
					800: "#3D4F30",
					900: "#263A19",
					950: "#091601",
				},
				accent: {
					50: "#FAF5F0",
					100: "#F4ECE1",
					200: "#E8D6BF",
					300: "#DDC2A2",
					400: "#D2AF84",
					500: "#C69963",
					600: "#B78343",
					700: "#926835",
					800: "#6C4D28",
					900: "#4B351B",
					950: "#382814",
				},
			},
		},
	},
	plugins: [],
};
