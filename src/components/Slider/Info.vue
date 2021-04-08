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

.b-briefInfo {
  font-family: Gilroy, serif;
  font-size: 18px;
  line-height: 22px;
  color: #070707;
}
</style>