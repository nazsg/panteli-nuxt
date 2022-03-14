<template>
  <div class="our-pictures">
    <h1>Photos</h1>

    <no-ssr>
      <LightGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </no-ssr>

    <ul>
      <li>
        <a
          href="#"
          v-for="(thumb, thumbIndex) in images"
          :key="thumbIndex"
          @click="index = thumbIndex"
        >
          <img :src="'/rest/rest' + thumb.id + '_sm.jpg'" :alt="thumb.title" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 1, title: 'image 1', url: '/rest/rest1.jpg' },
        { id: 2, title: 'image 2', url: '/rest/rest2.jpg' },
        { id: 3, title: 'image 3', url: '/rest/rest3.jpg' },
        { id: 4, title: 'image 4', url: '/rest/rest4.jpg' },
        { id: 5, title: 'image 5', url: '/rest/rest5.jpg' },
        { id: 6, title: 'image 6', url: '/rest/rest6.jpg' },
        { id: 7, title: 'image 7', url: '/rest/rest7.jpg' },
        { id: 8, title: 'image 8', url: '/rest/rest8.jpg' },
        { id: 9, title: 'image 9', url: '/rest/rest9.jpg' },
        { id: 10, title: 'image 10', url: '/rest/rest10.jpg' },
      ],
      index: null,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/../sass-mixins/_styles';
</style>
