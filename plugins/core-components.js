import Vue from 'vue'

import appHeader from '@/components/header'
import appMenu from '@/components/menu-helper'
import ArrowRightBoxIcon from 'vue-material-design-icons/ArrowRightBox.vue';

Vue.component('appHeader', appHeader)
Vue.component('appMenu', appMenu)
Vue.component('ArrowRight', ArrowRightBoxIcon)