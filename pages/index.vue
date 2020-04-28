<template>
  <div>
    <!-- <div class="content"> -->
      <h1>{{ 'welcome' | upper }}</h1> {{ this.$bus.home2 }}
      <!-- <p v-html="lineBreak(this.$bus.home[0].para)"></p>  -->
      <!-- 
        Above line gets this:
        TypeError
        Cannot read property 'para' of undefined 
        below is the work-around
      -->
      
      <template v-for="(menu, index) in this.$bus.home">
        <div v-if="menu.comments == 'home'" :key="index">
          <p v-html="lineBreak(menu.para)"></p>          
          <!--  exploring global vilters
            <p v-html="$options.filters.lineBreakNew(menu.para)"></p>                         
          -->
        </div>        
      </template>
    </div>
  
</template>
<script>
import axios from 'axios'
export default {
  head: {
    title: 'Panteli on Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The HOME page' }
    ]
  },
  data() {
    return {
      test: '',
      host: 'https://panteli.biz/',
      home: ''
    }
  },
  components: {
  },
  methods: {
    lineBreak(value) {
      return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }

  },
  filters: {
  },
  computed: {
    getHome() {
      return this.$bus.home
    }
    
  },
  created() {
    axios.get(this.host + 'others')
    .then(res => this.home = res.data)
  }
}
</script>

<style lang="scss" scoped>
.content {

  h1 {
    color: grey;
  }
}
</style>