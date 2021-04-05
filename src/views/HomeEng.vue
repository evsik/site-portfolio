<template>
  <v-content>
    <Header id="header"/>
    <Slider id="slider"/>
    <AboutMe id="aboutMe"/>
    <Skills id="skills"/>


    <!--    <SectionTwo id="section-two"/>-->
    <!--    <SectionThree id="section-three"/>-->
  </v-content>
</template>

<script>
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";

export default {
  name: "HomeEng",
  components: {
    Header,
    Slider,
    AboutMe,
    Skills
  }
}
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../node_modules/bootstrap-vue/src/index.scss';

</style>