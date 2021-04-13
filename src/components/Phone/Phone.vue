<template>
  <div class="b-phone">
    <a href="tel: +79850696969" class="b-phone__link">
      {{ path ? text : text2 }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Phone",
  data() {
    return {
      path: this.$route.path === '/',
      text: 'Call me',
      text2: 'Позвони мне'
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';
@import '../../layout/styles/_varText.scss';

.b-phone {

  .b-phone__link {
    @extend %descText;
  }
}
</style>