<template>
  <nav class="b-lang">
    <ul>
      <li class="b-lang__list">
        <router-link to="/ru" class="b-lang__router-link">RU</router-link>
      </li>
      <li class="b-lang__list">
        <router-link to="/eng" class="b-lang__router-link">ENG</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Lang"
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

.b-lang {
  transform: rotate(-90deg);

  ul {


    .b-lang__list {


      .b-lang__router-link {
        font-family: Gilroy, serif;
        font-size: 16px;
        line-height: 20px;

        color: #828282;

        &.router-link-exact-active {
          color: black;
        }
      }
    }
  }

  a {


    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>