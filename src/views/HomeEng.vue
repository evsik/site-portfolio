<template>
  <v-content>
    <Header id="header"/>
    <Slider id="slider"/>
    <!--    <SectionTwo id="section-two"/>-->
    <!--    <SectionThree id="section-three"/>-->
  </v-content>
</template>

<script>
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";

export default {
  name: "HomeEng",
  components: {
    Header,
    Slider
  }
}
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../node_modules/bootstrap-vue/src/index.scss';

</style>