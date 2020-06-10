<template>
  <div id="pictures">
    <h1>Restaurant Images</h1>
    <!-- <div id="overlay"> -->
    <div class="overlay" :class="{ show }" @click.self="close">
      <div id="text">
      <img :src="'https://panteli.biz/static/rest/rest' + currentImage + '.jpg'"  alt="">
      </div>
      <div class="buttons">
        <a class="icon" @click="prev" v-if="currentImage != min"><ArrowLeftBoxIcon title="Previous Image" :size="40" /></a>
        <a v-else class="disable icon"><ArrowLeftBoxIcon  :size="40" /></a>
        <a class="icon" @click="close"><AlphaXBoxIcon title="Close Gallery" :size="40" /></a>
        <a class="icon" @click="next" v-if="currentImage != max"><ArrowRightBoxIcon title="Next Image" :size="40" /></a>
        <a @click="next" v-else class="disable icon"><ArrowRightBoxIcon :size="40" /></a>

      </div>
    </div>
    <div class="thumbnail-container">
      <img class="thumb" v-for="(img, index) in total" :key="index" 
        :src="'https://panteli.biz/static/rest/rest' + parseInt(index+1) + '_sm.jpg'" @click="open(parseInt(index+1))" alt="">
    </div>

    <div class="image-container">
      <img class="image-container_image" v-for="(img, index) in total" :key="index" 
        :src="'https://panteli.biz/static/rest/rest' + parseInt(index+1) + '.jpg'"  
       alt="" />
    </div>
  </div>
</template>

<script>
// import ForwardIcon from 'vue-material-design-icons/Forward.vue';
import ArrowRightBoxIcon from 'vue-material-design-icons/ArrowRightBox.vue';
import ArrowLeftBoxIcon from 'vue-material-design-icons/ArrowLeftBox.vue';
import AlphaXBoxIcon from 'vue-material-design-icons/AlphaXBox.vue';
export default {
  head: {
    title: "Restaurant Pictures - PANTELI's of Canterbury",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Pictures of our restaurant' }
    ]
  },    
  components: {
    ArrowRightBoxIcon,
    ArrowLeftBoxIcon,
    AlphaXBoxIcon
  },
  data() {
    return {
      show: false,
      currentImage: 1,
      max: 10,
      min: 1,
      disable: true,
      disableNext: false,
      total: 10
    }
  },
  methods: {
    open(img) {
      this.show = true
      this.currentImage = img
    },
    close() {
      this.show = false
    },
    next() {
      this.currentImage ++        
    },
    prev() {
      this.currentImage --
    }
  },
  created() {
  }

}
</script>

<style lang="scss" scoped>

.thumbnail-container {
  // background-color: #000;
  padding: 20px;
  user-select: none;

  img {
    border-radius: 15px;
    user-select: none;
    cursor: pointer;
  }
}
.image-container {
   visibility: hidden;
  //  width: 50%;
  //  position: absolute;
 }
 
 .image-container_image {
   visibility: hidden;
  width: 20%;
  //  position: absolute;
 }



.thumb {
  padding: 5px;
  border-radius: 15px;
  // width: 120%;
}
.buttons {
  padding-top: 30px;
  width: 450px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  button {
    border-radius: 5px;
    width: 33.33%;
    height: 30px;
    font-family: Arial, Helvetica, sans-serif;
  }
}


a.icon {
  cursor: pointer;
  color: rgb(80, 118, 241);
  &:hover {
    color: rgb(9, 243, 223);
  }
}
.disable.icon {
  $disable: rgb(121, 117, 117);
  cursor: not-allowed;
  pointer-events: none;
  color: rgb(255, 0, 0);
  text-decoration: line-through;
  // background: $disable;
  // visibility: hidden;
}

button {
  z-index: 3;
}

.overlay {
  user-select: none;
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.801);
  z-index: 2;
  // cursor: pointer;
  img {
    // width: 120%;
    border-radius: 20px;
  }
}
.overlay.show {
  display: flex;
  // width: 100%;
  justify-content: center;
  #text{
    // width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    // font-size: 50px;
    // color: white;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);

  }
}

img {
  // transition: 0.9s;
}
</style>