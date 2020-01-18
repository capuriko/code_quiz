module.exports = {
  "configureWebpack": {
    "resolve": {
      "alias": {
        "vue$": "vue/dist/vue.esm.js"
      }
    }
  },
  "devServer": {
    "watchOptions": {
      "poll": true
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}