<template>
  <div>
    <h4 v-if="title != 'NO CAT'">{{ title | title2 }}</h4>
    <table>
      <tbody>
        <template v-for="menu in all_menus.filter(m => m.category == title)">
          <tr :key="menu.id">
            <td class="menu_id">{{ menu.id }}</td>
            <td class="item">{{ menu.item }}</td>

            <td v-if="menu.price != 0" class="price">
              &pound; {{ menu.price | twoPlaces }}
            </td>
            <td v-else></td>
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
    title2(title) {
      return title == 'NO CAT' ? '' : title
    },
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
h4 {
  text-transform: uppercase;
  margin-top: 20px;
}
</style>
