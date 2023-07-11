import { ALL_CATEGORY_ITEM } from '@/constants'

export default {
  namespaced: true,
  state: () => ({
    // 当前选中的分类
    currentCategory: ALL_CATEGORY_ITEM,
    searchText:'',
    //路由跳转类型
    routerType:'none'
  }),
  mutations: {
    /**
     * 切换选中分类
     */
    changeCurrentCategory(state, newCategory) {
      state.currentCategory = newCategory
    },
    changeSearchText(state,newSearchText){
      state.searchText=newSearchText
    },
    changeRouterType(state,newType){
      state.routerType=newType
    }
  }
}
