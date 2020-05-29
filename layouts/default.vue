<template>
  <div class="container_pant">
    <div class="header">
      <div class="banner"></div>
      <p>
        5 & 7 Canterbury Lane, Canterbury, Kent CT1 2HL
        Telephone:
        <a
          href="tel:+441227765506"
        >44 (0) 1227 765506</a>
      </p>
    </div>
    <div class="content">
      <main>
        <aside>
          <img src="/panteli-nuxt/front.jpg" alt />
          <appHeader />
        </aside>
        <nuxt />
      </main>
    </div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "~/components/header";
import appFooter from "~/components/footer";
export default {
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style lang="scss">
@import '~/assets/styles/common.scss';
$headerBg: #a2cbfc;
$containerBg: #d6e7fb;
$bodyText: #4c4c83;
$footerBg: #85aaf7;
html {
    background-color: $containerBg;
}
.container_pant {
  width: 100%;
  background-color: $containerBg;
  color: $bodyText;
  // height: 100%;
  .header {
    background-color: $headerBg;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(130, 169, 216);

    .banner {
      height: 120px;
      background-image: url("/panteli-nuxt/Panteli-banner-sm.jpg");
      // background-size: 100%;
      background-position: top center;
      // background-color: #a2cbfc;
      @media (min-width: 520px) {
        background-image: url("/panteli-nuxt/Panteli-banner-big.jpg");
      }
    }
    a {
      color: rgb(11, 110, 175);
      font-weight: bold;
      text-decoration: none;
    }
  }
  .content {
    width: 100%;
    background-color: #d6e7fb;
    @media (min-width: 650px) {
      max-width: 850px;
      margin: 0 auto;
    }

    main {
      display: flex;
      margin: 20px auto;
      width: 95%;
      // background-color: rgb(189, 182, 182);
      justify-content: center;
      position: static;

      aside {
        // width: 30%;
        // background-color: #ada3a3;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        position: static;
        left: 0;
        width: img {
          display: none;
        }
        .toggle {
          top: -20px;
          left: 0;
          position: absolute;
          height: 30px;
          background-color: #0861b48a;
          width: 100%;
          border-bottom: 1px solid #666;
          color: inherit;
          @media (min-width: 650px) {
            display: none;
          }
        }
        nav {
          display: none;
          margin-top: 10px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          padding: 10px;
          letter-spacing: 2px;
          font-family: Roboto;
          width: 100%;

          ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            width: 100%;
            li {
              // margin-bottom: 5px 0;
              // background-color: rgb(51, 49, 49);
              padding: 1px;
              width: 100%;
              a {
                display: block;
                text-decoration: none;
                padding: 10px;
                background-color: #9aceff;
                // margin: 1px 0;
                border-radius: 5px;
                width: 100%;
                &:hover {
                  background-color: #fff;
                }
              }
              a:link,
              a:visited,
              a:active {
                color: rgb(11, 110, 175);
              }
              a.nuxt-link-exact-active {
                background: #85aaf7;
                color: white;
              }
            }
          }
        }
      }

      .contact, .home, .find {
        width: 95%;
        padding: 20px;
      }
      .find {
        iframe {
          border: 1px solid $footerBg;
          border-radius: 10px;
        }
      }

      @media (max-width: 649px) {
        // main
        position: relative;
        // background-color: #fff;
        width: 100%;
        left: 0;

        aside {
          position: absolute;
          top: 0;
          width: 100%;
          left: 0;
          img {
            display: none;
          }

          nav {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            ul {
              width: 100%;
              position: absolute;
              top: 0;
              left: 0;

              li {
                width: 100%;
                background-color: #fff;
                padding: 0;
                a {
                  width: 100%;
                  border-radius: 0;
                }
              }
            }
          }
        }
      }
      @media (min-width: 650px) {
        width: 100%;
        aside {
          nav {
            display: flex;
            width: 100%;
            ul {
              width: 100%;
              padding: 0;
              li {
                // margin-left: -20px;
                width: 100%;
                a {
                  width: 100%;
                }
              }
            }
          }
          img {
            // display: flex;
            border-radius: 15px;
            padding: 0 10px;
          }
        }
      }
    }
  }
}

#upstairs,
#downstairs,
#pictures {
  width: 95%;
  margin: 0 auto;
  padding: 20px;

  table {
    width: 95%;
    margin: 0;
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
      width: auto;
    }
    .price {
      width: 50px;
      text-align: right;
    }
  }
}
header {
  margin-bottom: 20px;
}
footer {
  flex-shrink: 0;
  background-color: $footerBg;
  border-top: 2px solid #5f83d1;
  padding: 20px;
  display: flex;
  letter-spacing: 4px;
  font-family: Arial, Helvetica, sans-serif;
  background-position: bottom right;
  justify-content: center;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    li {
      flex-wrap: wrap;
      display: flex;
      padding: 5px;
      justify-content: space-between;
      line-height: 1.5;
      div {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        span {
          letter-spacing: normal;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>