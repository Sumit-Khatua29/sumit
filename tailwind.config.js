export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    // darkMode: 'selector', // Obsolete in v4, handled in CSS
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          display: ['Outfit', 'system-ui', 'sans-serif'],
        },
        animation: {
          'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
          'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          fadeInDown: {
            '0%': { opacity: '0', transform: 'translateY(-20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          }
        }
      },
    },
    plugins: [],
  }
