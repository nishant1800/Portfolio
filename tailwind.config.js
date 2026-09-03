/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1220',
          900: '#0F172A',
          850: '#131D31',
          800: '#172033',
          750: '#1D293D',
          700: '#26344D',
          600: '#334155',
        },
        accent: {
          DEFAULT: '#00D084',
          emerald: '#10B981',
          teal: '#14B8A6',
          hover: '#05b572',
          light: '#34D399',
          glow: 'rgba(0, 208, 132, 0.15)',
        },
        textColor: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        borderBase: '#26344D',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.45)',
        'card-hover': '0 12px 30px -4px rgba(0, 208, 132, 0.08), 0 4px 20px -2px rgba(0, 0, 0, 0.45)',
        'accent-glow': '0 0 25px rgba(0, 208, 132, 0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
