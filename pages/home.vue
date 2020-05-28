<template>
  <div class="container_pant">
    <div class="content">
      <div class="banner">
      </div>
      <main>
        <aside>
          <img src="/panteli-nuxt/front.jpg" alt="">
        </aside>
        <nuxt />
      </main>
    </div>
    <div class="footer">
      <appFooter />
    </div>
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

<style lang="scss" >
.container_pant {
  background-image: url('/panteli-nuxt/triangle.svg');
  background-position: top left;
  background-size: cover;
  // background-attachment: fixed;

  .content {
    // background-image: url('/panteli-nuxt/bg2.svg');
    background-position: top left;
    background-attachment: fixed;
    // background-size: cover;

    .banner {
      height: 160px;
    }

    main {
      display: flex;
      background-color: #dfdbdb;
      width: 90%;
      margin: 0 auto;

      aside {
        width: 400px;
        background-color: #fff;
      }
    }
  }
}
#upstairs, #downstairs {
  table {
    // width: 690px;
    margin-top: 15px;

    .menu_id {
      vertical-align: top;
      // width: 12px;
      // color: red;
      padding-right: 5px;
    }

    tr {
      &:first-child {
        text-transform: uppercase;
      }
    }
    tr.row_header { 
      height: 30px;
      text-transform: capitalize;
    }

    td.item {
      // width: 70%;
    }
    .price {
      width: 50px;
      text-align: right;
      vertical-align: top;
    }
  }

}
.header header {
  margin-bottom: 0px;
  height: 160px;
}
.footer footer {
  margin-top: 0px;
}
</style>