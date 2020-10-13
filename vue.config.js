module.exports = {
  productionSourceMap: false,

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/variables.scss";',
      },
    },
  },
};
