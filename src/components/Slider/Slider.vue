<template>
  <div class="b-slider">
    <div class="container">

      <MainPhoto></MainPhoto>
    </div>
  </div>
</template>

<script>

import MainPhoto from "./MainPhoto";

export default {
  name: "Slider",
  components: {
    MainPhoto
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

.b-slider {
  padding: 30px 0 100px 0;

  @include media-breakpoint-down(xs) {
    padding: 0 0 100px 0;
  }
}
</style>