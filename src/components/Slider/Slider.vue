<template>
  <div class="b-slider">
    <div class="container">
      <Name></Name>
      <Info></Info>
    </div>
  </div>
</template>

<script>
import Name from "./Name";
import Info from "./Info";

export default {
  name: "Slider",
  components: {
    Name,
    Info
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

.b-slider {
  display: flex;
  justify-content: space-between;
  padding: 30px 0 30px 0;
}
</style>