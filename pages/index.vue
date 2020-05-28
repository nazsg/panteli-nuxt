<template>
      <div class="home">
        <template v-for="(menu, index) in getHome">
          <div v-if="menu.comments == 'home2'" :key="index">
            <p v-html="lineBreak(menu.para)"></p>          
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
  computed: {
    getHome() {
      return this.$bus.home //.map(h => h.id === 1)
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
  // width: 50%;
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


@mixin showcase {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  // height: 100vh;
  padding: 0 20px;
  text-align: center;

  // display: flex;
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