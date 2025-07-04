module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/components/**/*.js'
  ],
  theme: {
    extend: {
      
                    colors: {
                        primary: '#2563eb', // Royal Blue
                        primary2: '#1e40af', // Darker Royal Blue
                        secondary: '#c5a880', // Gold accent
                        accent: '#c5a880', 
                        light: '#f8fafc', 
                        regular:'#FFD700',
                        dark: '#0f172a', 
                        author: '#3a7d5f', 
                        org: '#2c5e92',
                        microbits: '#1d4ed8'
                    },
                    fontFamily: {
                        heading: ['Montserrat', 'sans-serif'],
                        body: ['Roboto', 'sans-serif']
                    },
                    animation: {
                        'card-float': 'cardFloat 6s ease-in-out infinite',
                        'card-hover': 'cardHover 0.4s ease forwards'
                    },
                    keyframes: {
                        cardFloat: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        cardHover: {
                            '0%': { transform: 'translateY(0)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
                            '100%': { transform: 'translateY(-10px)', boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)' }
                       }
        }
    
    },
  },
  plugins: [],
}