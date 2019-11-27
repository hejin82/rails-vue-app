module.exports = {
  title: 'title',
  description: "description",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'guide', link: '/guide' },
      { text: 'External', link: 'www.google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/' },
          { text: 'Japanese', link: '/' }
        ]
      }
    ]
  }
}