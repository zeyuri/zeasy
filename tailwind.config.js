module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "var(--tw-prose-body)",
            code: {
              color: "var(--tw-prose-code)",
              backgroundColor: "var(--tw-prose-pre-bg)",
            },
            pre: { color: "var(--tw-prose-pre-code)" },
            strong: {
              color: "var(--tw-prose-headings)",
            },
            blockquote: {
              color: "var(--tw-prose-quotes)",
            },
            h1: {
              color: "var(--tw-prose-headings)",
            },
            h2: {
              color: "var(--tw-prose-headings)",
            },
            h3: {
              color: "var(--tw-prose-headings)",
            },
            h4: {
              color: "var(--tw-prose-headings)",
            },
            h5: {
              color: "var(--tw-prose-headings)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
