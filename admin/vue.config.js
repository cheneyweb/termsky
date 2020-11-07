module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#3F4255',
            'font-size-base': '12px'
          },
          javascriptEnabled: true,
        },
      },
    },
  },
}