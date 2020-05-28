<template>
    <table>
      <template v-for="(menu) in category" >
        <tr class="category__row" v-if="menu.id === 1" :key="menu.id">
          <td colspan="4">No Cat</td>
        </tr>
        <tr :key="menu.id + 1001">
        <td class="menu_id">{{ menu.id }} </td>
        <td class="item">{{ menu.item }}</td>
        <td class="price" colspan="2"> &pound; {{ menu.price }}</td>                   
        </tr>
      </template>                       
    </table>  
</template>

<script>
export default {
  props: [ "category"

  ]
}
</script>