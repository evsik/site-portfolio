<template>
  <div class="b-mainPhoto">

  </div>
</template>

<script>
export default {
  name: "MainPhoto"
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

.b-mainPhoto {
  height: 400px;
  background: url("../../assets/Photosss.jpg") no-repeat center;
  background-size: cover;
}
</style>