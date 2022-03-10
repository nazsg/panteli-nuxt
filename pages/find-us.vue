<template>
  <div class="find">
    <h1>Find Us</h1>
    <iframe
      data-v-1340ddfc=""
      src="https://maps.google.co.uk/maps?q=5+canterbury+lane+ct1+2hl&amp;ie=UTF8&amp;hq=&amp;hnear=5+Canterbury+Ln,+Canterbury,+Kent+CT1,+United+Kingdom&amp;ll=51.278192,1.083467&amp;spn=0.010792,0.014634&amp;t=m&amp;z=14&amp;output=embed"
    ></iframe>
  </div>
</template>

<script>
export default {
  head: {
    title: "Find Us - PANTELI's of Canterbury",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'We are located at the heart of Canterbury Town. Please follow this map to get to us.',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
.image {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 90vh;
  img {
    border-radius: 30px;
    transition: 0.9s;
  }
}
iframe {
  width: 100%;
  height: 500px;
}
</style>
