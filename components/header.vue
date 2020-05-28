<template>
  <div>
    <a href="#" class="toggle" @click.prevent="menu"><Menu /></a>
    
    <nav class="menu" :class="{show}">
      <ul>
        <li @click.prevent="close">          
          <nuxt-link  to="/" >Home</nuxt-link>
        </li>
        <li @click.prevent="close">
          <nuxt-link to="/upstairs-menu" >Upstairs Menu</nuxt-link>
        </li>
        <li @click.prevent="close">
          <nuxt-link to="/downstairs-menu" >Downstairs Menu</nuxt-link>
        </li>
        <li @click.prevent="close">
          <nuxt-link to="/pictures" >Pictures</nuxt-link>
        </li>
        <li @click.prevent="close">
          <nuxt-link to="/find-us" >Find Us</nuxt-link>
        </li>
        <li @click.prevent="close">
          <nuxt-link to="/contact-us" >Contact Us</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Menu from 'vue-material-design-icons/Menu.vue';
export default {
  components: { Menu },
  data() {
    return {
      show: false,
      hideNav: false
    }
  },
  methods: {
    menu() {
      this.show =  !this.show
    },
    close() {
      this.show = false
      // this.hideNav = true
    }
  }
}
</script>
<style scoped>
aside nav.menu.show {
  display: flex;
}
.hideNav {
  display: none;
}
</style>