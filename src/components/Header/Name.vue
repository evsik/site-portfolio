<template>
  <h1 class="b-name" v-html="path ? text : textRu">

  </h1>
</template>

<script>
export default {
  name: "Name",
  data() {
    return {
      path: this.$route.path === '/',
      text: `
        Ilia
        <br>
        Evsikov
      `,
      textRu: `
        Илья
        <br>
        Евсиков
      `,
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

.b-name {
  font-family: Gilroy, serif;
  font-size: 47.3392px;
  line-height: 59px;
  color: #070707;
  text-align: left;
  font-weight: 600;

  @include media-breakpoint-down(xs) {
    grid-area: 1/1;
    font-size: 40.3392px;
    line-height: 48px;
  }
}
</style>