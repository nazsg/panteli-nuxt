<template>
  <div>
    <h4>{{ title || '&nbsp;' }}</h4>
    <table border="0">
      <thead>
        <tr class="row_header">
          <td colspan="2"></td>
          <td class="price">Regular</td>
          <td class="price">Medium</td>
          <td class="price">Large</td>
        </tr>
      </thead>
      <tbody>
        <template v-for="menu in all_menus.filter(m => m.category == title)">
          <tr :key="menu.id">
            <td class="menu_id">{{ menu.id }}</td>
            <td class="item">{{ menu.item }}</td>
            <td v-if="menu.price == '0.00'" class="price">--</td>
            <td v-else class="price">&pound; {{ menu.price | twoPlaces }}</td>
            <td v-if="menu.price == '0.00'" class="price">--</td>
            <td v-else class="price">&pound; {{ menu.price2 | twoPlaces }}</td>
            <td class="price">&pound; {{ menu.price3 | twoPlaces }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['all_menus', 'title'],
  filters: {
    twoPlaces(val) {
      return val.toFixed(2)
    },
  },
}
</script>

<style lang="scss" scoped>
h4 {
  text-transform: uppercase;
  margin-top: 20px;
}
</style>
