/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#04070a',
          900: '#070b10',
          850: '#0a0f16',
          800: '#0d141c',
          700: '#131c26',
        },
        signal: {
          400: '#5ffbc0',
          500: '#2be6a4',
          600: '#17c98b',
        },
        volt: {
          400: '#5fd0ff',
          500: '#2bb4ff',
        },
        alert: {
          low: '#2be6a4',
          medium: '#ffc25c',
          high: '#ff8a4c',
          critical: '#ff5468',
          info: '#5fd0ff',
        },
      },
      fontFamily: {
        display: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(95,208,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(95,208,255,0.055) 1px, transparent 1px)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.45)',
        glow: '0 0 40px rgba(43,230,164,0.18)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: 0.25 },
          '50%': { opacity: 1 },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      animation: {
        scan: 'scan 6s linear infinite',
        pulseLine: 'pulseLine 2.4s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
