<template>
  <nav class="b-navigation">
    <ul>
      <li class="b-navigation__list">
        <router-link to="#" v-scroll-to="'#header'" class="router-link">Home</router-link>
      </li>
      <li class="b-navigation__list">
        <router-link to="#" v-scroll-to="'#aboutMe'" class="router-link">About me</router-link>
      </li>
      <li class="b-navigation__list">
        <router-link to="/skills" class="router-link">Skills</router-link>
      </li>
      <li class="b-navigation__list">
        <router-link to="/portfolio" class="router-link">Portfolio</router-link>
      </li>
      <li class="b-navigation__list">
        <router-link to="/contacts" class="router-link">Contacts</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

.b-navigation {
  padding: 30px 0 30px 0;
  border-bottom: 1px solid #828282;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;

    .b-navigation__list {

      .router-link {
        text-decoration: none;
        font-size: 18px;
        line-height: 22px;
        color: #828282;
        font-family: Gilroy, serif;
        font-weight: 400;

        &:hover {
          color: black;
        }
      }
    }
  }
}

</style>