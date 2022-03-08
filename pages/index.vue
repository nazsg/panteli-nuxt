<template>
  <div class="home">
    <!-- <h2>Welcome to PANTELI's of Canterbury</h2> -->
    <img src="panteli_front1a.jpg" alt="" />
    <p v-html="lineBreak(home)"></p>
    <img class="img" src="panteli__eat-out-to-help-out.jpg" alt="eat out to help out" />
    <br />
    <p>Please observe social distancing.</p>
    <nuxt-link to="covid">More on Covid-19</nuxt-link>
    <img src="panteli_front2a.jpg" alt="" />
  </div>
</template>
<script>
import axios from 'axios'
export default {
  head: {
    title: "Panteli's of Canterbury",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Restaurant / Cafe at the heart of Canterbury Town Centre',
      },
    ],
  },
  data() {
    return {
      host: 'https://panteli.biz/',
      home: '',
    }
  },
  components: {},
  methods: {
    lineBreak(value) {
      return value.replace(/(?:\r\n|\r|\n)/g, '<br />')
    },
    test() {
      alert('test')
      console.log('test')
    },
  },
  computed: {
    getHome() {
      return this.$bus.home //.map(h => h.id === 1)
    },
  },
  mounted() {
    axios.get(this.host + 'home_para').then(res => (this.home = res.data[0].para))
  },
}
</script>

<style lang="scss" scoped>
$bg: rgba(60, 65, 90, 0.664);
.img,
img {
  margin: 15px 0;
  width: 100%;
}
@mixin textBox {
  background-color: rgba(60, 65, 90, 0.664);
  padding: 30px 20px;
  color: rgb(194, 181, 181);
  border-radius: 15px;
  // width: 50%;
  font-family: Verdana;
  letter-spacing: 2px;
  button,
  a {
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
  align-items: flex-end;
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
