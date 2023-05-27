/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["Astro"],
                body: ["Quicksand"],
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
