<template>
  <div class="b-skills">
    <div class="container">
      <div class="b-skills__textWrapper">
        <h2 class="b-skills__head">
          Skills
        </h2>
        <p class="b-skills__text">
          I work in such programs as:
        </p>
      </div>
      <div class="b-skillsBlock multiple-items">
        <Item
            v-for="item of this.$store.state.dataArr"
            :item="item"
            :key="item.id_skills"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item";
import $ from "jquery"

export default {
  name: "Skills",
  data() {
    return {}
  },
  components: {
    Item
  },
  mounted() {
    this.$store.commit('getData')
  },
  updated() {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4
    });
  },
  methods: {}
}
</script>

<style lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

.b-skills {
  padding: 100px 0 100px 0;

  .container {
    .b-skills__textWrapper {
      margin-bottom: 80px;

      .b-skills__head {
        font-family: Gilroy, serif;
        font-size: 34px;
        line-height: 42px;
        text-align: center;
        color: #070707;
        margin-bottom: 60px;
      }

      .b-skills__text {
        font-family: Gilroy, serif;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #070707;
      }
    }

    .b-skillsBlock {
      display: flex;
      justify-content: space-between;

    }
  }
}

.slick-prev:before, .slick-next:before {
  color: #070707 !important;
  font-size: 40px !important;
}

</style>