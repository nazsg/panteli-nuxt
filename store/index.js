export const state = () => ({
  test: 'hi from root store',
})

export const getters = {
  getTest: (state) => {
    return state.test
  },
}

export const mutations = {
  set_starters(state, arg) {
    // state.starters = arg[1].starter
  },
}

export const actions = {
  async nuxtServerInit(store, context) {
    try {
      const response = await context.$axios.get('orders_2020.php')
      store.commit('restaurant/set_orders', response.data)
    } catch (error) {
      
    }
  }
}

// {{ $store.state.starters }} (state)  <hr />
// <!-- {{ $store.state.soups }} (state)  <hr /> -->
// {{ $store.getters.getStarters }} (getters)  <hr /> -->
// {{ $store.state.main_menu.starters }} (state) <hr /> -->
// {{ $store.getters['main_menu/getStarters'] }} (getters) <hr /> -->