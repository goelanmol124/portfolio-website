/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'tech-bg': '#0a0a0a',
                'tech-card': '#1a1a1a',
                'neon-blue': '#00f3ff',
                'neon-purple': '#bc13fe',
                'bio-green': '#00ff9d',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
            },
        },
    },
    plugins: [],
}
