/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports = {
=======
export default {
>>>>>>> origin/main
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
<<<<<<< HEAD
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

=======
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    require('preline/plugin'),
  ],
}
>>>>>>> origin/main
