<template>
  <div>
    <div class="image">
      <img :src="images[img]" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://panteli.biz/static/chips.jpg',
        'https://panteli.biz/static/chips2.jpg',
        'https://panteli.biz/static/cup-smoke.jpg',
        'https://panteli.biz/static/coffee2a.jpg',
        'https://panteli.biz/static/coffee.jpg'
      ],
      img: 0
    }
  },
  methods: {
  },
  mounted() {
    setInterval(() => {
      this.img = Math.floor(Math.random() * 4);     // returns a random integer from 0 to 9
    }, 5000);    
  },
  head: {
    title: 'Find Us',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Find Us description' }
    ]
  }  
}
</script>

<style lang="scss" scoped>
.image {
  margin: 0 auto;
  height: 90vh;
  img {
    width: 100%;
    overflow: hidden;
  }
}
</style>
