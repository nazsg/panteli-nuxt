<template>
  <div id="upstairs">
    <h1>Upstairs Menu</h1>
  
    <tab3Col1price v-for="(menu, index) in all_cats" :key="index" :title="menu" :all_menus="all_menus" />

  </div>
</template>

<script>
import axios from 'axios'
import tab3Col1price from '@/components/3-col-1-price'
export default {
  components: { tab3Col1price },
  head: {
    title: 'Upstairs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Upstairs description' }
    ]
  },
  data() {
    return {
      count: 1,
      icecream: 'PLEASE ASK FOR OUR SPECIAL ICE CREAM MENU',
      myhost: 'https://panteli.biz/',
      up: [],
    }
  },
  asyncData(context) {
    let url = 'https://panteli.biz/'
    return context.$axios.get(url + 'upstairs-20')
    .then(res => {
      return { 
        all_menus: res.data, 
        all_cats: res.data
          .map (cat => cat.category)
          .filter( (val, index, self) => self.indexOf(val) === index ) }
        // map to an array of category names
        // then filter to return unique categories only
    })
    .catch(error => { 
      context.error({
        message: 'ajax problem'  // if custom error set
      })
      // context.redirect('/')
    })
  },    
}
</script>
