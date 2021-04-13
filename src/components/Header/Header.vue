<template>
  <header class="b-header">
    <div class="container">
      <div class="b-majorNav b-header__nav">
        <Navigation></Navigation>
      </div>
      <div class="b-majorInfo">
        <Name></Name>
        <Info></Info>
        <Lang></Lang>
        <NavigationForPhone></NavigationForPhone>
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from "../Navigation/Navigation";
import Name from "./Name";
import Info from "./Info";
import Lang from "./Lang";
import NavigationForPhone from "../Navigation/NavigationForPhone";

export default {
  name: "Header",
  components: {
    Navigation,
    NavigationForPhone,
    Name,
    Info,
    Lang,
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

.b-majorNav {
  @include media-breakpoint-down(xs) {
    display: none;
  }
}

.b-majorInfo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  padding: 30px 0px;

  @include media-breakpoint-down(xs) {
    grid-template-columns: repeat(2, 1fr);
    padding: 15px 0px;
  }
}

</style>