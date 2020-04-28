import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: { // synchronous
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
      ,addPost() {

      }
      ,editPost(){

      }
    },
    actions: { // asynchronous
      nuxtServerInit(vuexContext, context) {          
        return axios.get('https://nuxt-48a82.firebaseio.com/post.json')
          .then(res => {
            const serverData = []
            for(const key in res.data) {
              serverData.push({...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', serverData)
            console.log(serverData)
            }
          )
          .catch( e => context.error(e))
      },
      setPosts(vuexStore, posts) {
        vuexStore.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore