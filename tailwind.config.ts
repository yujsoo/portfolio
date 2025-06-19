export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#40e0d0',
          dark: '#181826',
        },
      },
      fontFamily: {
        ppNeueMontreal: ['ppNeueMontreal'],
        poppins: ['poppins'],
        pretendard: ['pretendard'],
      },
      wordBreak: {
        keep: 'keep-all',
      },
    },
  },
}
