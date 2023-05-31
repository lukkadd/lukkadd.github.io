/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["Astro"],
                body: ["Quicksand"],
            },
            colors: {
                purple: {
                    dark: "#0f0c29",
                    light: "#302b63",
                },
            },
        },
    },
    plugins: [
        function ({ addComponents, theme }) {
            addComponents({
                html: {
                    fontFamily: "Quicksand",
                },
            })
        },
    ],
}
