<template>
  <div class="container_pant">
    <div class="header">      
      <div class="banner"></div>
      <section>
        <p>
          5 & 7 Canterbury Lane, Canterbury, Kent CT1 2HL
        </p>
        <p> 
          Telephone:
          <a
            href="tel:+441227765506"
          >44 (0) 1227 765506</a>
        </p>
      </section>
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

  .header {
    background-color: $headerBg;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-bottom: 35px;
    border-bottom: 2px solid rgb(130, 169, 216);

    section {
      background-color: inherit;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      p {
        padding: 0 5px;
      }
    }

    .banner {
      height: 120px;
      background-image: url("/panteli-nuxt/Panteli-banner-sm.jpg");
      background-position: top center;
      background-repeat: no-repeat;
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

    main {
      display: flex;
      margin: 20px auto;
      width: 95%;
      justify-content: center;
      position: static;

      aside {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        position: static;
        left: 0;
        font-family: 'Quicksand', sans-serif;
        padding-right: 20px;
        width: img {
          display: none;
        }
        .toggle {
          top: -20px;
          left: 0;
          position: absolute;
          height: 35px;
          line-height: 35px;
          background-color: #0861b48a;
          width: 100%;
          border-bottom: 1px solid #666;
          color: inherit;
          @media (min-width: 750px) {
            display: none;
          }
        }
        nav {
          display: none;
          margin-top: 15px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          padding: 10px;
          letter-spacing: 2px;
          // font-family: Roboto;
          width: 100%;

          ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            width: 100%;
            li {
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

      .find {
        iframe {
          border: 1px solid $footerBg;
          border-radius: 10px;
        }
      }
      .contact, .home, .find {
        width: 95%;
        padding: 0 30px;
      }
      .home {
        span {
          margin-top: 10px;
        }
        p {
          letter-spacing: 1.1px;
        }
      }
      .contact {
        form {
          background-color: rgb(181, 218, 253);
          border: 1px solid $bodyText;
          border-radius: 7px;
          input, textarea {
            background-color: darken($containerBg, 2%);
          }
          .actions {
            display: flex;
            justify-content: space-around;
            button {
              border: 1px solid $footerBg;
              background-color: $containerBg;
              border-radius: 5px;
              outline: none;
              &:hover {
                background-color: #fff;
              }
            }
            button.disabled {
              background-color: #999;
              cursor: not-allowed;
              color: #a03838;
              text-decoration: line-through;
            }
          }
        }
      }
      @media (max-width: 350px) {
        .contact form {
          li {
            display: flex;
            flex-direction: column;
            input, textarea, label {
              flex-basis: 100%;
            }
          }
        }
      }
    }
  }
}
#upstairs, #downstairs {
  position: relative;
  .goToTop {
    position: fixed;
    bottom: 120px;
    right: 10px;
    font-size: 2rem;
    text-decoration: none;
    color: inherit;
  }
}
@import '../assets/styles/default_750';
@import '../assets/styles/default_749';

#upstairs,
#downstairs,
#pictures {
  width: 95%;
  margin: 0 auto;
  padding: 0 20px;

  table {
    width: 95%;
    margin: 0;
    .menu_id {
      vertical-align: top;
      width: 30px;
    }

    tr {
      vertical-align: top;
      text-transform: lowercase;
      // &:first-child {
      //   text-transform:capitalize;
      // }
    }

    td.item {
      width: auto;
    }
    .price {
      width: 55px;
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