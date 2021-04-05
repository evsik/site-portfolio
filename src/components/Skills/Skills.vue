<template>
  <div class="b-skills">
    <div class="container">
      <div>
        <h2 class="b-skills__head">
          Skills
        </h2>
        <p class="b-skills__text">
          I work in such programs as:
        </p>
      </div>
      <Item
          v-for="item of this.$store.state.dataArr"
          :item="item"
          :key="item.id_skills"
      />
    </div>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "Skills",
  components: {
    Item
  },
  mounted() {
    this.$store.commit('getData')
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

.b-skills {
  padding: 100px 0 100px 0;

  .container {

    .b-skills__head {
      font-family: Gilroy, serif;
      font-size: 34px;
      line-height: 42px;
      text-align: center;
      color: #070707;
    }

    .b-skills__text {
      font-family: Gilroy, serif;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #070707;
    }
  }

}

</style>