<template>
  <div class="b-portfolio">
    <div class="container">
      <div class="b-portfolio__textWrapper">
        <h2 class="b-portfolio__head" v-html="path ? head : headRu">
        </h2>
      </div>
      <div class="b-portfolio__works">
        <Item
            v-for="item of $store.state.works"
            :key="item.title"
            :item="item"
        />
      </div>
      <a href="https://github.com/evsik" class="b-moreLink" @click="isActiveMore = true"
         :class="{ trackingOutExpand: isActiveMore }" v-html="path ? text : textRu">
        MORE
      </a>
    </div>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "Portfolio",
  components: {
    Item
  },
  data() {
    return {
      isActiveMore: false,
      path: this.$route.path === '/',
      head: `Portfolio`,
      headRu: `Портфолио`,
      text: `MORE`,
      textRu: `БОЛЬШЕ РАБОТ`,
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';
@import '../../layout/styles/_varText.scss';

.b-portfolio {
  padding: 100px 0 100px 0;
  background-color: #F6F6F6;

  .container {
    .b-portfolio__textWrapper {
      margin-bottom: 80px;

      .b-portfolio__head {
        @extend %headText
      }
    }

    .b-portfolio__works {
    }

    .b-moreLink {
      font-family: Gilroy, serif;
      font-size: 34px;
      line-height: 42px;
      text-align: center;
      color: #070707;
      margin-bottom: 60px;
      font-weight: 300;
      letter-spacing: 5px;
      text-decoration: none;
      transition: 1s;

      &:hover {
        //text-shadow: 1px 1px 15px #f68123;
        letter-spacing: 20px;
        text-decoration: none;
      }
    }
  }
}
</style>