/** @type {import('tailwindcss').Config} */
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

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
                gray: {
                    dark: "#2d2928",
                    light: "#403a3a",
                },
                offwhite: "#e1d2ac",
                blue: {
                    accent: "#8bc4c2",
                },
            },
        },
    },
    plugins: [
        function ({ addComponents, matchUtilities, theme }) {
            addComponents({
                ".ccontainer": {
                    margin: "auto",
                    padding: "1.5rem",
                    maxWidth: "100ch",
                },
            }),
                matchUtilities(
                    {
                        "text-glow-sm": (value) => ({
                            "text-shadow": "0 0 5px " + value,
                        }),
                        "text-glow-md": (value) => ({
                            "text-shadow": "0 0 15px " + value,
                        }),
                    },
                    {
                        values: flattenColorPalette(theme("colors")),
                        type: "color",
                    }
                )
        },
    ],
}
