module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/fonts/'
      : '/',
      css: {
        loaderOptions: {
          sass: {
            additionalData: `@import "@/src/sass/main.scss";`
          }
        }
      }
  }