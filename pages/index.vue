<template>
  <div>
    <div id="showcase">

      <div class="banner">
        <!-- <h1>{{ 'welcome' | upper }}</h1> -->
        <template v-for="(menu, index) in this.$bus.home">
          <div v-if="menu.comments == 'home'" :key="index">
            <p v-html="lineBreak(menu.para)"></p>          
          </div>        
        </template>        
      </div>
    </div>    
    <section></section>
    <v-parallax height="90"
      src="https://panteli.biz/static/cup-smoke.jpg">
    </v-parallax>      
    
    <section></section>
    <v-parallax height="800"
      src="https://panteli.biz/static/chips.jpg">
    </v-parallax>      
    <section></section>
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
  layout: 'home',
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
$bg : rgba(100, 127, 250, 0.466);
.banner {
  background-color: $bg;
  padding: 30px 20px;
  color: rgb(194, 181, 181);
  border-radius: 15px;
  width: 50%;
  font-family: Verdana; 
  // font-size: 700; 
  // font-weight: 500;
  letter-spacing: 2px;
}

section#opening-hours {
  background-color: $bg;
  background-image: url('https://images.pexels.com/photos/9352/glass-time-watch-business.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
  time {
    letter-spacing: 2px;
    font-family: Roboto;
    color: white;
  }
}
@mixin showcase {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  padding: 0 20px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:flex-end;

  .button {
    font-size: 18px;
    text-decoration: none;
    color: rgb(73, 75, 72);
    border: 1px solid rgb(84, 85, 80);
    background-color: rgb(206, 192, 161);
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 20px;
    &:hover {
      background-color: rgb(234, 234, 245);
    }
  }
}
h1 {
  font-size: 50px;
  line-height: 1.4;
}
#showcase2 {
  @include showcase;
  background-image: url('https://panteli.biz/static/coffee.jpg');
}
#showcase {
  display: flex;
  @include showcase;
  background-image: url('https://panteli.biz/static/coffee2a.jpg');
  // justify-content: right;
  // align-items: right;

}
</style>