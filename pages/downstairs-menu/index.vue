<template>
  <div id="downstairs">
    <div class="content">
    <h1>Downstairs Menu</h1>    
        <tab3Col1price v-for="(menu, index) in group1" :key="index +100" :title=menu :all_menus=all_menus />
        <tab4Col2price v-for="(menu, index) in group2" :key="index +200" :title=menu :all_menus=all_menus />
        <tab5Col3price v-for="(menu, index) in group3" :key="index +300" :title=menu :all_menus=all_menus />
        <tab3Col1price v-for="(menu, index) in group4" :key="index +400" :title=menu :all_menus=all_menus />
    </div>
  </div>
</template>

<script>
import tab3Col1price from '~/components/3-col-1-price'
import tab4Col2price from '~/components/4-col-2-price'
import tab5Col3price from '~/components/5-col-3-price'
export default {
  data() {
    return {
      all_menus : []
    }
  },
  components: { tab3Col1price, tab4Col2price, tab5Col3price },
  head: {
    title: 'Downstairs Menus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Downstairs Menus description' }
    ]
  },  
  filters: {
    twoPlaces(val) {
      return val.toFixed(2)
    }
  },
  computed: {
    group1() {
      return this.all_menus
          .filter (cat => cat.seq === 1 )
          .map(c => c.category)
          .filter( (val, index, self) => self.indexOf(val) === index )      
    },
    group2() {
      return this.all_menus
          .filter (cat => cat.seq === 2 )
          .map(c => c.category)
          .filter( (val, index, self) => self.indexOf(val) === index )      
    },
    group3() {
      return this.all_menus
          .filter (cat => cat.seq === 3 )
          .map(c => c.category)
          .filter( (val, index, self) => self.indexOf(val) === index )      
    },
    group4() {
      return this.all_menus
          .filter (cat => cat.seq === 4 )
          .map(c => c.category)
          .filter( (val, index, self) => self.indexOf(val) === index )      
    }
  },
  created() {
    let url = 'https://panteli.biz/'
    this.$axios.get(url + 'downstairs.php')
    .then(res => {
        this.all_menus = res.data
    })
  },      
}
</script>