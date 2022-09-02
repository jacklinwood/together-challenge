/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
        './index.html',
        './src/**/*.{js,jsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'roobert-regular': ['Roobert-Regular', 'sans-serif'],
                'roobert-medium': ['Roobert-Medium', 'sans-serif'],
                'roobert-bold': ['Roobert-Bold', 'sans-serif'],
            },
            colors: {
                'brand-navy': "#0A1628",
                'brand-pink': "#E359FF",
                'brand-purple': "#8655FF",
            },
            // backgroundImage: {
            //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            // }
        },
    },
    plugins: [],
};