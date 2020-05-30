<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <div v-if="formSubmitted">
      <p>
        Thank you. Your message has been submitted. You will hear from us soon.
      </p>
    </div>
    <form v-else>
      <li>
        <label for>Name</label>
        <input v-model="info.name" type="text" placeholder="Your name" />
      </li>
      <li>
        <label for>Email</label>
        <input v-model="info.email" type="text" placeholder="Your email" />
      </li>
      <li>
        <label for>Message</label>
        <textarea name id cols="30" rows="10" v-model="info.message" placeholder="Your message"></textarea>
      </li>
      <li >
          <template v-if="result == 'not ok'">
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
      </li>
      <li class="actions">
        <button @click.prevent="clear">Clear</button>
        <button v-if="result == 'ok'" @click.prevent="submit">Submit</button>
        <button v-else class="disabled" @click.prevent="submit">Submit</button>
      </li>
      <div class="error">{{ formError }}</div>      
    </form>
  </div>
</template>

<script>
import wys from "../../functions/norobots";
export default {
  data() {
    return {
      info: { name: "", email: "", message: "", submitToLaki: true },
      no1: "",
      no2: "",
      sum: "",
      guess: "",
      choices: [],
      result: "not ok", 
      formSubmitted: false,
      formError: ''
    };
  },
  methods: {
    check(val) {
      let el = "n" + val;
      if (val == this.sum) {
        document.getElementById(el).style.color = "green";
        setTimeout(() => {
          this.result = "ok";
        }, 1000);
      } else {
        this.result = "not ok";
        document.getElementById(el).style.color = "red";
        // setTimeout(() => {
        //   document.getElementById(el).style.color = "#5e5b5b";
        // }, 1500);
      }
    },
    clear() {
      (this.info.name = ""), (this.info.email = ""), (this.info.message = "");
    },
    submit() {
      this.$axios.post("mailer20.php", this.info)
      .then(res => {
        if(res.data == 'Success') {
          this.formSubmitted = true
        } else {
          this.formError = 'Sorry your message was not sent. Please try again later.'
        }
      })
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
@import "../assets/styles/contact";
</style>