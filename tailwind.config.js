/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	fontFamily:{
		'neu' : ['Public Sans', 'sans-serif'],
		'outfit' : ['Outfit', 'sans-serif']
	},
	extend: {
	  colors: {
		main: '#A3E636',
		mainAccent: '#88cc19', // not needed for shadcn components
		overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
  
		// light mode
		bg: '#E0E7F1',
		text: '#000',
		border: '#000',
  
		// dark mode
		darkBg: '#111903',
		darkText: '#eeefe9',
		darkBorder: '#000',
		secondaryBlack: '#1b1b1b', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
	  },
	  borderRadius: {
		base: '5px'
	  },
	  boxShadow: {
		light: '3px 3px 0px 0px #000',
		pressed: '0px 0px 0px 0px #000',
		dark: '3px 3px 0px 0px #000',
	  },
	  translate: {
		boxShadowX: '0,8px',
		boxShadowY: '0,8px',
		reverseBoxShadowX: '-3px',
		reverseBoxShadowY: '-3px',
	  },
	  fontWeight: {
		base: '500',
		heading: '700',
	  },
	},
  },
  plugins: [require("tailwindcss-animate")],
};
