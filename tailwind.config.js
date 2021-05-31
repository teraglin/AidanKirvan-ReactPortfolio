module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'edward-lizard-hands': "url(https://scontent.fsyd11-2.fna.fbcdn.net/v/t1.6435-9/183951505_10161182946819762_5430746201332209907_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=tSAnZ5Lo-pAAX9QW--l&_nc_oc=AQlKa-EUPZBQpyflQOAh3qK09fbN-YNc_npT_RgwUoQXKbYyNfW324TTGZRyN6SgAbU&_nc_ht=scontent.fsyd11-2.fna&oh=1995aea3725d47c058f459b0d953a99f&oe=60D909DF)"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
