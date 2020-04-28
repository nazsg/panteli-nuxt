<template>
  <div>
    <div class="content">
      <appHeader />
      <nuxt />
    </div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from '~/components/header'
import appFooter from '~/components/footer'
export default {
  components: {
    appHeader, appFooter
  }
}
</script>

<style lang="scss">


#upstairs, #downstairs {
  table {
    width: 650px;
    margin-top: 15px;

    .menu_id {
      vertical-align: top;
      width: 30px;
    }

    tr {
      &:first-child {
        text-transform: uppercase;
      }
    }

    td.item {
      width: 70%;
    }
    .price {
      width: 50px;
      text-align: right;
    }
  }

}

</style>