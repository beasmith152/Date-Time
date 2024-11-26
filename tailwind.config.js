/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
      
        'hero': "url('https://images.alphacoders.com/527/thumb-1920-527845.jpg')",
        
    },fontFamily:{Rubik: ['Rubik Glitch', 'system-ui']}
  },
  plugins: [],
}

}