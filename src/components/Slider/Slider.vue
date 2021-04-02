<template>
  <div class="b-slider">
    <div class="container">
      <div class="b-slider__nav">
        <Name></Name>
        <Info></Info>
        <Lang></Lang>
      </div>
      <MainPhoto></MainPhoto>
    </div>
  </div>
</template>

<script>
import Name from "./Name";
import Info from "./Info";
import Lang from "./Lang";
import MainPhoto from "./MainPhoto";

export default {
  name: "Slider",
  components: {
    Name,
    Info,
    Lang,
    MainPhoto
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

.b-slider {
  padding: 30px 0 100px 0;

  .container {

    .b-slider__nav {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: end;
      padding-bottom: 30px;
    }
  }
}
</style>