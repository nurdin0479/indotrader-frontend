module.exports = {
  theme: {
    extend: {
      colors: {
        cyanGlow: '#00fff7',
      },
      dropShadow: {
        neon: '0 0 20px #00fff7',
      },
      animation: {
        floatBlob: 'floatBlob 30s ease-in-out infinite',
      },
      keyframes: {
        floatBlob: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '25%': { transform: 'translate(30px,-50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px,40px) scale(1.05)' },
          '75%': { transform: 'translate(50px,30px) scale(1.1)' },
          '100%': { transform: 'translate(0,0) scale(1)' },
        },
      },
      transitionDelay: {
        2000: '2000ms',
        4000: '4000ms',
      },
    },
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      colors: {
        cyanGlow: '#00fff7',
      },
      dropShadow: {
        neon: '0 0 20px #00fff7',
      },
      animation: {
        floatBlob: 'floatBlob 30s ease-in-out infinite',
      },
      keyframes: {
        floatBlob: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '25%': { transform: 'translate(30px,-50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px,40px) scale(1.05)' },
          '75%': { transform: 'translate(50px,30px) scale(1.1)' },
          '100%': { transform: 'translate(0,0) scale(1)' },
        },
      },
      transitionDelay: {
        2000: '2000ms',
        4000: '4000ms',
      },
    },
  },
  plugins: [],
};
