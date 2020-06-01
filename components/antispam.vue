<template>
  <div class="anti-spam">
    <h3>Anti-spam (do sum then submit)</h3>
    <div class="sum">
      <p>
        <span class="nos" v-html="no1"></span>
        <span class="nos">&#x2b;</span>
        <span class="nos" v-html="no2"></span>
        <span class="nos">&#x3d;</span>
      </p>
      <p>
        <span
          :id="'n' + c.d"
          @click="check(c.d)"
          class="choices"
          v-for="(c, index) in choices"
          :key="index"
          v-html="c.n"
        ></span>
      </p>
    </div>
  </div>
</template>

<script>
import wys from "../../functions/norobots";
export default {
  props: ["result"],
  data() {
    return {
      no1: "",
      no2: "",
      sum: "",
      guess: "",
      choices: []
    };
  },
  computed: {
    test() {}
  },
  methods: {
    check(val) {
      let el = "n" + val;
      if (val == this.sum) {
        document.getElementById(el).style.color = "green";
        setTimeout(() => {
          this.update();
        }, 1000);
      } else {
        document.getElementById(el).style.color = "red";
      }
    },
    assign() {
      this.choices.forEach(c => {
        if (c.d == this.no1) {
          this.no1 = c.n;
        }
      });
      this.choices.forEach(c => {
        if (c.d == this.no2) {
          this.no2 = c.n;
        }
      });
    },
    update() {
      this.$emit("updateResult", "verified");
    }
  },
  mounted() {
    this.no1 = Math.floor(Math.random() * 4 + 1);
    this.no2 = Math.floor(Math.random() * 5 + 1);
    this.sum = this.no1 + this.no2;
    this.choices = wys.choice;
    this.assign();
  }
};
</script>
<style lang="scss" scoped>
.anti-spam {
  // color: #5e5b5b;
  width: 100%;
  display: flex;
  background-color: rgb(236, 234, 234);
  flex-direction: column;
  border-radius: 5px;
  padding: 3px;
  h3 {
    text-align: center;
    border-bottom: 1px solid rgb(180, 180, 180);
    font-weight: normal;
    font-size: 0.9rem;
    padding: 3px;
  }
  .sum {
    //   padding: 3px;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    text-align: center;
    border: 1px solid rgb(206, 205, 205);
    color: #4e4e50;
    //   padding: 7px;
    * {
      padding: 7px;
    }
    p:first-child {
      border-bottom: 1px dotted #c2c1c1;
    }
    .nos {
      font-size: 2rem;
      display: inline-block;
    }
    .choices {
      color: #7a7a7a;
      display: inline-block;
      font-size: 2em;
      cursor: pointer;
      &:hover {
        color: #4e4e50;
      }
    }
  }
}
</style>