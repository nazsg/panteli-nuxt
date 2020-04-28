<template>
  <!-- <div> -->
    <div class="content">

    <h1>Upstairs Menu</h1>

    <table id="" border="0">
      <template v-for="(menu) in this.$bus.no_cat" >
        <tr class="category__row" v-if="menu.id === 1" :key="menu.id">
          <td colspan="4">No Cat</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
      </template>                 
        <tr class="category__row" ><td></td></tr>

      <template v-for="(menu) in this.$bus.main_meals" >
        <tr class="category__row" v-if="menu.id === 3" :key="menu.id">
          <td colspan="4">Main Meals</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>           
      
      <template v-for="(menu) in this.$bus.fish" >
        <tr class="category__row" v-if="menu.id === 9" :key="menu.id">
          <td colspan="4">Fish</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.grills" >
        <tr class="category__row" v-if="menu.id === 12" :key="menu.id">
          <td colspan="4">Grills</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.entrees" >
        <tr class="category__row" v-if="menu.id === 19" :key="menu.id">
          <td colspan="4">Entrees</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.salads" >
        <tr class="category__row" v-if="menu.id === 24" :key="menu.id">
          <td colspan="4">Salads</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.desserts" >
        <tr class="category__row" v-if="menu.id === 28" :key="menu.id">
          <td colspan="4">Salads</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.hot" >
        <tr class="category__row" v-if="menu.id === 35" :key="menu.id">
          <td colspan="2">Hot Drinks</td>
          <td>Medium</td>
          <td>Large</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan=""> &pound; {{ menu.price | twoPlaces }}</td>                   
        <td class="price" colspan=""> &pound; {{ menu.price2 | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.ramsgate" >
        <tr class="category__row" v-if="menu.id === 37" :key="menu.id">
          <td colspan="4">Ramsgate Brewery</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.whitstable" >
        <tr class="category__row" v-if="menu.id === 40" :key="menu.id">
          <td colspan="4">Whitstable Brewery</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.shepherd" >
        <tr class="category__row" v-if="menu.id === 41" :key="menu.id">
          <td colspan="4">Shepherd Brewery</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.pine" >
        <tr class="category__row" v-if="menu.id === 43" :key="menu.id">
          <td colspan="4">PINE TREES FARM</td>
        </tr>
        <tr :key="menu.id + 100">
        <td class="menu_id">{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.barnsole" >
        <tr class="category__row" v-if="menu.id === 44" :key="menu.id">
          <td colspan="4">Barnsole Vineyard</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.founders" >
        <tr class="category__row" v-if="menu.id === 46" :key="menu.id">
          <td colspan="4">Founders Stone</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                 

      <template v-for="(menu) in this.$bus.others" >
        <tr class="category__row" v-if="menu.id === 49" :key="menu.id">
          <td colspan="4">Others</td>
        </tr>
        <tr :key="menu.id + 100">
        <td>{{ menu.id }} </td>
        <td>{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
        </tr>
        <!-- <tr class="category__row" :key="menu.id+1000"><td></td></tr> -->
      </template>                  
                 
    </table>
    </div>

  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      icecream: 'PLEASE ASK FOR OUR SPECIAL ICE CREAM MENU'
    }
  },
  filters: {
    twoPlaces(val) {
      return val.toFixed(2)
    }
  },
  methods: {
    getBus() {
    }
  },
  created() {
   
  }
}
</script>