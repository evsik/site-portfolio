<template>
  <div class="b-work">
    <div class="b-work__img">
      <img :src="item.screen" alt="#">
    </div>
    <a :href="item.workLink" class="b-work__link">
      {{ item.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Item",

  data() {
    return {
    }
  },
  props: {
    item: {type: Object}
  }
}
</script>

<style lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';
@import '../../layout/styles/_varText.scss';

.b-work {
  margin-bottom: 100px;

  .b-work__img {
    margin-bottom: 45px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .b-work__link {
    @extend %descText;
    text-decoration-line: underline;

    &:hover {
      color: #f68123;
    }
  }
}
</style>