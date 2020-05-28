<template>
  <div>
    <transition name="fade">
      <div class="image" >
        <img :src="images[img]" alt="">
      </div>

    </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://panteli.biz/static/chips_sm.jpg',
        'https://panteli.biz/static/chips2_sm.jpg',
        'https://panteli.biz/static/cup-smoke_sm.jpg',
        'https://panteli.biz/static/coffee2a_sm.jpg',
        'https://panteli.biz/static/coffee_sm.jpg'
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
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 90vh;
  img {
    border-radius: 30px;
    transition: .9s;
  }
}
</style>
