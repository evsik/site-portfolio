<template>
  <v-content>
    <Header id="header"/>
    <Slider id="slider"/>
    <AboutMe id="aboutMe"/>
    <Skills id="skills"/>
    <Portfolio id="portfolio"/>
    <Footer id="footer"/>


    <!--    <SectionTwo id="section-two"/>-->
    <!--    <SectionThree id="section-three"/>-->
  </v-content>
</template>

<script>
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";

export default {
  name: "HomeRu",
  components: {
    Header,
    Slider,
    AboutMe,
    Skills,
    Portfolio,
    Footer
  }
}
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../node_modules/bootstrap-vue/src/index.scss';

</style>