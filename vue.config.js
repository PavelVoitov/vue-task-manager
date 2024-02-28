module.exports = {
  configureWebpack: {
    plugins: [],
  },
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      const [options] = args
      options['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = false
      return args
    })
  },
}
