/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Prompt"],
      },
      colors: {
        'app-green': "#5C9F38",
        'app-darkgreen': "#364D1F",
      },
      
    }
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],

  corePlugins: {
    aspectRatio: false,
  },
}

