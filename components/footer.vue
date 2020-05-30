<template>
  <footer>
    <ul>
      <li>
          &copy;2006 - {{new Date().getFullYear() }} Panteli's of CANTERBURY 
      </li>
      <li>
        <div>
          <Wifi title="Free Wi-Fi" /> <span>Free Wi-Fi</span>
        </div>
        <div>
          <Wheelchair title="Wheelchair Access"/> <span>Wheelchair Access</span>
        </div>
        <div>
          <a target=_blank href="http://www.facebook.com/PantelisofCanterbury"><Facebook /></a>
        </div>    
      </li>
    </ul>
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