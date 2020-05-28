<template>
  <footer>
<p>
      &copy;2006 - {{new Date().getFullYear() }} Panteli's of CANTERBURY 
      
    <Wifi /> <Wheelchair /> <a target=_blank href="http://www.facebook.com/PantelisofCanterbury"><Facebook /></a>
</p>
  </footer>
</template>

<script>
import Wifi from 'vue-material-design-icons/Wifi.vue'
import Wheelchair from 'vue-material-design-icons/WheelchairAccessibility.vue'
import Facebook from 'vue-material-design-icons/Facebook.vue'
export default {
  components: { Wifi, Wheelchair, Facebook }
}
</script>