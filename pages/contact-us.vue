<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <div v-if="formSubmitted">
      <p style="margin-top:20px">
        Thank you. Your message has been submitted. You will hear from us soon.
      </p>
    </div>
    <form v-else>
      <ul>
        <li>
          <label for="name">Name</label>
          <input v-model="info.name" type="text" placeholder="Your name" id="name" />
        </li>
        <li>
          <label for="email">Email</label>
          <input v-model="info.email" type="email" placeholder="Your email" id="email" />
        </li>
        <li>
          <label for="message">Message</label>
          <textarea
            id="message"
            cols="18"
            rows="10"
            v-model="info.message"
            placeholder="Your message"
          ></textarea>
        </li>
        <li>
          <antispam
            v-if="result == 'unverified'"
            result="unverified"
            v-on:updateResult="result = arguments[0]"
          />
        </li>
        <li class="actions">
          <button @click.prevent="clear">Clear</button>
          <button v-if="result == 'verified'" @click.prevent="validate">
            Submit
          </button>
          <button v-else class="disabled" @click.prevent>Submit</button>
        </li>
      </ul>
      <span class="error">{{ formError }}</span>
    </form>
  </div>
</template>

<script>
import antispam from '../components/antispam'
export default {
  head: {
    title: "Contact Us - PANTELI's of Canterbury",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Contact form - Please feel free to send us any enquiry that you may have.',
      },
    ],
  },
  components: { antispam },
  data() {
    return {
      info: { name: '', email: '', message: '', submitToLaki: true },
      result: 'unverified',
      formSubmitted: false,
      formError: '',
    }
  },
  methods: {
    clear() {
      ;(this.info.name = ''), (this.info.email = ''), (this.info.message = '')
      this.formError = ''
    },
    checkEmail() {},
    validate() {
      let _ = this.info
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let err = false
      let email_err = ''
      if (_.name == '' || _.email == '' || _.message == '') err = true
      if (_.email.trim() !== '') {
        if (re.test(String(this.info.email).toLowerCase()) == false) {
          err = true
          email_err = ' and email needs a valid format'
        }
      } else {
        err = true
      }
      if (err == true) this.formError = 'pls fill in all fields' + email_err
      if (err == false) this.submit()
    },
    submit() {
      this.$axios.post('mailer20.php', this.info).then(res => {
        if (res.data == 'Success') {
          this.formSubmitted = true
        } else {
          this.formError = 'Sorry your message was not sent. Please try again later.'
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/contact';
</style>
