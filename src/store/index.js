import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count++
    },
    sub(state) {
      state.count--
    },
    addN(state, N) {
      state.count += N
    },
    subN(state, N) {
      state.count -= N
    }
  },
  actions: {
    asyncAdd(context) {
      setTimeout(() => {
        context.commit('add')
      }, 500)
    },
    asyncSub(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 500)
    },
    asyncNAdd(context, N) {
      console.log(context)
      setTimeout(() => {
        context.commit('addN', N)
      }, 500)
    },
    asyncNSub(context, N) {
      setTimeout(() => {
        context.commit('subN', N)
      }, 500)
    }
  },
  getters: {
    showCount(state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
