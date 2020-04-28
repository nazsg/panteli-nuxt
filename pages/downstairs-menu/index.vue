<template>
  <div id="downstairs">
    <div class="content">
    <h1>Downstairs Menu</h1>

      <table>
        <template v-for="(menu) in this.$bus.snacks" >
          <tr class="category__row" v-if="menu.id === 1" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.paninis" >
          <tr class="category__row" v-if="menu.id === 5" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.sandwiches" >
          <tr class="category__row" v-if="menu.id === 9" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.toasted" >
          <tr class="category__row" v-if="menu.id === 12" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.rolls" >
          <tr class="category__row" v-if="menu.id === 19" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.sandwiches_cold" >
          <tr class="category__row" v-if="menu.id === 32" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.main_menus" >
          <tr class="category__row" v-if="menu.id === 44" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.main_meals" >
          <tr class="category__row" v-if="menu.id === 46" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.fish_down" >
          <tr class="category__row" v-if="menu.id === 52" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.grills_down" >
          <tr class="category__row" v-if="menu.id === 55" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.burgers" >
          <tr class="category__row" v-if="menu.id === 59" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.entrees_down" >
          <tr class="category__row" v-if="menu.id === 64" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.jacket" >
          <tr class="category__row" v-if="menu.id === 72" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.salads_down" >
          <tr class="category__row" v-if="menu.id === 77" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.extras" >
          <tr class="category__row" v-if="menu.id === 81" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.extras" >
          <tr class="category__row" v-if="menu.id === 81" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.children" >
          <tr class="category__row" v-if="menu.id === 90" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.breakfast" >
          <tr class="category__row" v-if="menu.id === 97" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.set_breakfast" >
          <tr class="category__row" v-if="menu.id === 104" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.vegetarian" >
          <tr class="category__row" v-if="menu.id === 105" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.pastries" >
          <tr class="category__row" v-if="menu.id === 106" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.biscuits" >
          <tr class="category__row" v-if="menu.id === 123" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.desserts_down" >
          <tr class="category__row" v-if="menu.id === 127" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.ice_cream_specials" >
          <tr class="category__row" v-if="menu.id === 137" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.hot_drinks" >
          <tr class="category__row" v-if="menu.id === 143" :key="menu.id">
            <td colspan="2">{{ menu.category }}</td>
            <td class="price">Small</td><td class="price">Large</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan=""> &pound; {{ menu.price | twoPlaces }}</td>                   
          <td class="price" colspan=""> &pound; {{ menu.price3 | twoPlaces }}</td>                   
          </tr>
        </template>                       
      </table>

      <table>
          <template v-for="(menu) in this.$bus.cold_drinks_dispensed" >
            <tr class="category__row" v-if="menu.id === 151" :key="menu.id">
              <td colspan="3">{{ menu.category }}</td>
              <td class="price">Regular</td>
              <td class="price">Medium</td>
              <td class="price">Large</td>
            </tr>
            <tr :key="menu.id + 100">
            <td class="menu_id">{{ menu.id }} </td>
            <td class="item">{{ menu.item }}</td>
            <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                 
            <td class="price" colspan=""> &pound; {{ menu.price2 | twoPlaces }}</td>            
            <td class="price" colspan=""> &pound; {{ menu.price3 | twoPlaces }}</td>            
            </tr>
          </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.cold_drinks_bottled" >
          <tr class="category__row" v-if="menu.id === 157" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                 
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.cold_drinks_cans" >
          <tr class="category__row" v-if="menu.id === 169" :key="menu.id">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                 
          </tr>
        </template>                       
      </table>

      <!-- from here onwards, data taken from upstairs menu as they're the same -->
      <table>
        <template v-for="(menu) in this.$bus.ramsgate" >  
          <tr class="category__row" v-if="menu.id === 37" :key="menu.id + 137">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id + 137 }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                 
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.whitstable" >  
          <tr class="category__row" v-if="menu.id === 40" :key="menu.id + 137">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id + 137 }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                 
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.shepherd" >  
          <tr class="category__row" v-if="menu.id === 41" :key="menu.id + 137">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id + 137 }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                 
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.pine" >  
          <tr class="category__row" v-if="menu.id === 43" :key="menu.id + 137">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id + 137 }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                 
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.barnsole" >  
          <tr class="category__row" v-if="menu.id === 44" :key="menu.id + 137">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id + 137 }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                 
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.founders" >  
          <tr class="category__row" v-if="menu.id === 46" :key="menu.id + 137">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id + 137 }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                 
          </tr>
        </template>                       
      </table>

      <table>
        <template v-for="(menu) in this.$bus.others" >  
          <tr class="category__row" v-if="menu.id === 49" :key="menu.id + 137">
            <td colspan="4">{{ menu.category }}</td>
          </tr>
          <tr :key="menu.id + 100">
          <td class="menu_id">{{ menu.id + 137 }} </td>
          <td class="item">{{ menu.item }}</td>
          <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>                 
          </tr>
        </template>                       
      </table>
      
    </div>
  </div>
</template>

<script>
import menuSlot from '~/components/menu_slots'
export default {
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
  }  
}
</script>