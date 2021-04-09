<template>
  <header>
    <div class="container">
      <Navigation></Navigation>
    </div>
  </header>
</template>

<script>
import Navigation from "../Navigation/Navigation";

export default {
  name: "Header",
  components: {
    Navigation
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';


</style>