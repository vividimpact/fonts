scss: generateLoaders("sass").concat({
    loader: "sass-resources-loader",
    options: {
      resources: path.resolve(__dirname, "./src/sass/main.scss")
    }
  })