/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/layouts/**/*.{js,ts,jsx,tsx}',
        './src/shared/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    100: '#5271FF',
                },
            },
        },
    },
    plugins: [],
}
