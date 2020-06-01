<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <div v-if="formSubmitted">
      <p>Thank you. Your message has been submitted. You will hear from us soon.</p>
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
      <li>
        <antispam v-if="result == 'unverified'" result="unverified" v-on:updateResult="result = arguments[0]" />
      </li>
      <li class="actions">
        <button @click.prevent="clear">Clear</button>
        <button v-if="result == 'verified'" @click.prevent="submit">Submit</button>
        <button v-else class="disabled" @click.prevent>Submit</button>
      </li>
      <div class="error">{{ formError }}</div>
    </form>
  </div>
</template>

<script>
import antispam from "../components/antispam";
export default {
  components: { antispam },
  data() {
    return {
      info: { name: "", email: "", message: "", submitToLaki: true },
      result: "unverified",
      formSubmitted: false,
      formError: ""
    };
  },
  methods: {
    clear() {
      (this.info.name = ""), (this.info.email = ""), (this.info.message = "");
      this.formError = "";
    },
    submit() {
      this.$axios.post("mailer20.php", this.info).then(res => {
        if (res.data == "Success") {
          this.formSubmitted = true;
        } else {
          this.formError =
            "Sorry your message was not sent. Please try again later.";
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/contact";
</style>