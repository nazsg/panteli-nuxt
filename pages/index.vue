<template>
  <div>
    <div id="showcase">

      <div class="covid">
        <!-- <h1>{{ 'welcome' | upper }}</h1> -->
        <template v-for="(menu, index) in this.$bus.home">
          <div v-if="menu.comments == 'home'" :key="index">
            <p v-html="lineBreak(menu.para)"></p>          
          </div>        
        </template>        
      </div>
    </div>    
    <section></section>
    <v-parallax height="600"
      src="https://panteli.biz/static/cup-smoke.jpg">
      <div class="banner">
        <p>
          Freshly made sandwiches, teas and coffees and hot meals are served all day at reasonable prices.
        </p>
        <p>
          Wines, beers, and spirits are available all day, with or without meals, throughout the premises.        
        </p>
        <div class="buttons">
          <nuxt-link to="/upstairs-menu">Upstairs Menu</nuxt-link>
          <nuxt-link to="/downstairs-menu">Downstairs Menu</nuxt-link>
        </div>
      </div>
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
$bg : rgba(60, 65, 90, 0.664);

@mixin textBox {
  background-color: rgba(60, 65, 90, 0.664);
  padding: 30px 20px;
  color: rgb(194, 181, 181);
  border-radius: 15px;
  width: 50%;
  font-family: Verdana; 
  letter-spacing: 2px;
  button, a {
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    text-decoration: none;
    color: rgb(73, 75, 72);
    background-color: rgb(214, 212, 212);
    padding: 10px 20px;
    border-radius: 7px;
    margin-top: 20px;
    &:hover {
      background-color: rgb(245, 245, 250);
    }
  }
}
.covid {
  @include textBox;
}
.banner {
  @include textBox;
  background-color: rgba(11, 70, 117, 0.733);
  margin: 0 auto;
  color: rgb(218, 218, 218);
  font-family: 'Marck Script', cursive;
  font-size: 1.7rem;
  p {
    margin: 10px 0;
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
}
.buttons {
  display: flex;
  justify-content: space-around;
}
</style>