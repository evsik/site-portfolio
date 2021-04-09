<template>
  <div id="app">
    <router-view/>
    <ButtonUp/>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import ButtonUp from "./components/ButtonUp/ButtonUp";

export default {
  name: "App",
  components: {
    Header,
    ButtonUp
  },
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import '../node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

//#nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    //&.router-link-exact-active {
//    //  color: #42b983;
//    //}
//  }
//}
</style>
