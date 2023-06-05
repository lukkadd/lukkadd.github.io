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
                nasa: ["Nasalization"],
            },
            colors: {
                purple: {
                    dark: "#0f0c29",
                    light: "#302b63",
                },
                gray: {
                    darkest: "#0d0908",
                    dark: "#151110",
                    medium: "#212121",
                    light: "#414141",
                    faded: "#464745",
                },
                offwhite: "#d9c8a9",
                blue: {
                    accent: "#8bc4c2",
                    desaturated: "#37423e",
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
                    maxWidth: "80ch",
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
