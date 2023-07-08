import { createStore } from 'vuex'
import category from './modules/category'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'
import theme from './modules/theme'
import app from './modules/app'
import search from './modules/search'

const store = createStore({
  getters,
  modules: {
    category,
    theme,
    app,
    search,
  },
  plugins: [
    createPersistedState({
      // 保存到 localStorage 中的 key
      key: 'imooc-front',
      // 需要保存的模块
      paths: ['category','theme','search']
    })
  ]
})

export default store
