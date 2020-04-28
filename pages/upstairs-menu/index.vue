<template>
  <div id="upstairs">
    <!-- <p>test {{ this.$bus.testCall() }}</p> -->
    <!-- <div class="content"> -->

    <h1>Upstairs Menu</h1>

    <table>
      <template v-for="(menu) in no_cat" >
        <tr class="category__row" v-if="menu.id === 1" :key="menu.id">
          <td colspan="4">No Cat</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                       
    </table>

    <table>
      <template v-for="(menu) in main_meals" >
        <tr class="category__row" v-if="menu.id === 3" :key="menu.id">
          <td colspan="4">Main Meals</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>           
    </table>

    <table>
      <template v-for="(menu) in fish" >
        <tr class="category__row" v-if="menu.id === 9" :key="menu.id">
          <td colspan="4">Fish</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>
    
    <table>
      <template v-for="(menu) in grills" >
        <tr class="category__row" v-if="menu.id === 12" :key="menu.id">
          <td colspan="4">Grills</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>
    
    <table>
      <template v-for="(menu) in entrees" >
        <tr class="category__row" v-if="menu.id === 19" :key="menu.id">
          <td colspan="4">Entrees</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>

    <table>
      <template v-for="(menu) in salads" >
        <tr class="category__row" v-if="menu.id === 24" :key="menu.id">
          <td colspan="4">Salads</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>

    <table>
      <template v-for="(menu) in desserts" >
        <tr class="category__row" v-if="menu.id === 28" :key="menu.id">
          <td colspan="4">Desserts &amp; Ice-Cream {{ icecream }}</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>

    <table>
      <template v-for="(menu) in hot" >
        <tr class="category__row" v-if="menu.id === 35" :key="menu.id">
          <td colspan="2">Hot Drinks</td>
          <td class="price">Small</td>
          <td class="price">Large</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan=""> &pound; {{ menu.price | twoPlaces }}</td>                   
        <td class="price" colspan=""> &pound; {{ menu.price2 | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>

    <table>
      <template v-for="(menu) in ramsgate" >
        <tr class="category__row" v-if="menu.id === 37" :key="menu.id">
          <td colspan="4">Ramsgate Brewery</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>

    <table>
      <template v-for="(menu) in whitstable" >
        <tr class="category__row" v-if="menu.id === 40" :key="menu.id">
          <td colspan="4">Whitstable Brewery</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>

    <table>
      <template v-for="(menu) in shepherd" >
        <tr class="category__row" v-if="menu.id === 41" :key="menu.id">
          <td colspan="4">Shepherd Brewery</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>

    <table>
      <template v-for="(menu) in pine" >
        <tr class="category__row" v-if="menu.id === 43" :key="menu.id">
          <td colspan="4">PINE TREES FARM</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>

    <table>
      <template v-for="(menu) in barnsole" >
        <tr class="category__row" v-if="menu.id === 44" :key="menu.id">
          <td colspan="4">Barnsole Vineyard</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>

    <table>
      <template v-for="(menu) in founders" >
        <tr class="category__row" v-if="menu.id === 46" :key="menu.id">
          <td colspan="4">Founders Stone</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
    </table>

    <table>
      <template v-for="(menu) in others" >
        <tr class="category__row" v-if="menu.id === 49" :key="menu.id">
          <td colspan="4">Others</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                  
    </table>                 
    <!-- </div> -->

  </div>
</template>

<script>
import axios from 'axios'
export default {
  head: {
    title: 'Upstairs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Upstairs description' }
    ]
  },
  data() {
    return {
      count: 1,
      icecream: 'PLEASE ASK FOR OUR SPECIAL ICE CREAM MENU',
      myhost: 'https://panteli.biz/',
      up: [],
      no_cat: [],
      main_meals: [],
      fish: [],
      grills: [],
      entrees: [],
      salads: [],
      desserts: [], 
      hot: [],
      ramsgate: [],
      whitstable: [],
      shepherd: [],
      pine: [],
      barnsole: [],
      founders: [],
      others: []       
    }
  },
  filters: {
    twoPlaces(val) {
      return val.toFixed(2)
    }
  },
  methods: {
    getUpMenus() {
      axios.get(this.myhost + 'upstairs-20')
      .then(res => {
        this.up = res.data
        this.catUp()
      })
      .catch(e => console.log(e))
    },    
    catUp() {
      const all = this.up
      this.no_cat = all.filter(m => m.category === 'no cat')
      this.main_meals = all.filter(m => m.category === 'MAIN MEALS')
      this.fish = all.filter(m => m.category === 'FISH')
      this.grills = all.filter(m => m.category === 'GRILLS')
      this.entrees = all.filter(m => m.category === 'ENTREES')
      this.salads = all.filter(m => m.category === 'SALADS')
      this.desserts = all.filter(m => m.category === 'DESSERTS & ICE CREAM')    
      this.hot = all.filter(m => m.category === 'HOT')    
      this.ramsgate = all.filter(m => m.category === 'RAMSGATE BREWERY')
      this.whitstable = all.filter(m => m.category === 'WHITSTABLE BREWERY')    
      this.shepherd = all.filter(m => m.category === 'SHEPHERD NEAME BREWERY')
      this.pine = all.filter(m => m.category === 'PINE TREES FARM')
      this.barnsole = all.filter(m => m.category === 'BARNSOLE VINEYARD')
      this.founders = all.filter(m => m.category === 'FOUNDERS STONE')
      this.others = all.filter(m => m.category === 'OTHERS')
    }    
  },
  created() {
   this.getUpMenus()
  }
}
</script>