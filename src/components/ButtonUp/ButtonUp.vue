<template>
  <router-link to="" v-scroll-to="'#header'" class="router-link" id="fadeButton">
    <i class="far fa-arrow-alt-circle-up"></i>
  </router-link>
</template>

<script>
import $ from "jquery";

export default {
  name: "ButtonUp",

  mounted() {
    this.fadeBtn()
  },

  methods: {
    fadeBtn() {
      $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 100) {
          $('#fadeButton').fadeIn();
        } else {
          $('#fadeButton').fadeOut();
        }
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

#fadeButton {
  position: fixed;
  z-index: 100;
  display: none;
  top: 300px;
  left: 35px;

  i {
    color: black;
    font-size: 40px;

    @include media-breakpoint-down(sm) {
      color: #00000061;
    }
  }

  @include media-breakpoint-down(sm) {
    bottom: 10px;
    top: auto;
    left: calc(50% - 15px);
  }
}
</style>