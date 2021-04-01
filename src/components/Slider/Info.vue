<template>
  <p class="b-briefInfo">
    Front-end Developer
    <br>
    27 years old, Moscow
  </p>
</template>

<script>
export default {
  name: "Info"
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