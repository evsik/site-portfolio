<template>
  <nav class="b-lang">
    <ul>
      <li class="b-lang__list">
        <router-link to="/" class="b-lang__router-link">ENG</router-link>
      </li>
      <hr>
      <li class="b-lang__list">
        <router-link to="/ru" class="b-lang__router-link">RU</router-link>
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
  justify-self: end;

  ul {
    list-style-type: none;

    .b-lang__list {
      transform: rotate(-90deg);

      .b-lang__router-link {
        font-family: Gilroy, serif;
        font-size: 16px;
        line-height: 20px;
        text-decoration: none;
        color: #828282;

        &:hover {
          color: black;
        }

        &.router-link-exact-active {
          color: black;
        }
      }
    }
  }
}
</style>