<template>
  <div>
    <slot>
      <tr :key="menu.id + 100">
      <td class="menu_id">{{ menu.id }} </td>
      <td class="item">{{ menu.item }}</td>
      <td class="price" colspan="2"> &pound; {{ menu.price | twoPlaces }}</td>  
      </tr>                    
    </slot>
  </div>
</template>