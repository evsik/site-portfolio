<template>
  <p class="b-briefInfo" v-html="path ? text : textRu">

  </p>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      path: this.$route.path === '/',
      text: `
        Front-end Developer
        <br>
        27 years old, Moscow
      `,
      textRu: `
        Фронт-энд разработчик
        <br>
        27 лет, Москва
      `,
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';
@import '../../layout/styles/_varText.scss';

.b-briefInfo {
  @extend %descText;

  @include media-breakpoint-down(xs) {
    grid-area: 2/1;
    text-align: left;
    grid-column: 1/3;
  }
}
</style>