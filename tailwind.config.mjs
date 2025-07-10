/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7A28CB',
          cream: '#F2F3D9',
          dark: '#32292F',
        },
      },
      fontFamily: {
        brand: ["'Acumin Variable Concept'", 'sans-serif'],
        heading: ["'Inter'", 'sans-serif'],
        body: ["'Noto Sans'", 'sans-serif'],
      },
      fontSize: {
  			testimonial: 'clamp(42px,5.5vw,90px)',
  			h0Text: 'clamp(36px,4vw,80px)',
  			h1Text: 'clamp(32px,3.5vw,72px)',
  			h2Text: 'clamp(28px,3vw,56px)',
  			h3Text: 'clamp(24px,2.5vw,52px)',
  			h4Text: 'clamp(20px,2vw,48px)',
  			h5Text: 'clamp(16px,1.5vw,44px)',
  			h6Text: 'clamp(14px,1.25vw,24px)',
  			mediumText: 'clamp(12px, 1.2vw, 24px)',
  			regularText: 'clamp(12px, 1vw, 18px)',
  			smallText: 'clamp(10px, .875vw, 16px)',
  			tinyText: 'clamp(8px, .75vw, 14px)',
			h0TextPhone: 'clamp(36px,16vw,80px)',
  			h1TextPhone: 'clamp(32px,14vw,72px)',
  			h2TextPhone: 'clamp(28px,12vw,56px)',
  			h3TextPhone: 'clamp(24px,10vw,52px)',
  			h4TextPhone: 'clamp(20px,8vw,48px)',
  			h5TextPhone: 'clamp(16px,6vw,44px)',
  			h6TextPhone: 'clamp(14px,4.5vw,24px)',
  			mediumTextPhone: 'clamp(12px, 4.25vw, 24px)',
  			regularTextPhone: 'clamp(12px, 4vw, 18px)',
  			smallTextPhone: 'clamp(10px, 3.5vw, 16px)',
  			tinyTextPhone: 'clamp(8px, 3vw, 14px)',
			
  		},
    },
  },
  safelist: [
    'text-h3Text',
    // add other custom classes as needed
  ],
}; 