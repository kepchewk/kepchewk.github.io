const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['index.html'],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['NoirPro', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
