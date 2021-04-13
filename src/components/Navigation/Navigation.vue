<template>
  <nav class="b-navigation">
    <ul>
      <li class="b-navigation__list" @click="$store.state.activeMenu = !$store.state.activeMenu">
        <router-link to="" v-scroll-to="'#header'" class="router-link" id="navigation__list">
          {{ path ? 'Home' : 'Главная' }}
        </router-link>
      </li>
      <li class="b-navigation__list">
        <router-link to="" v-scroll-to="'#aboutMe'" class="router-link">
          {{ path ? 'About me' : 'О себе' }}
        </router-link>
      </li>
      <li class="b-navigation__list">
        <router-link to="" v-scroll-to="'#skills'" class="router-link">
          {{ path ? 'Skills' : 'Навыки' }}
        </router-link>
      </li>
      <li class="b-navigation__list">
        <router-link to="" v-scroll-to="'#portfolio'" class="router-link">
          {{
            path ? 'Portfolio' : 'Портфолио'
          }}
        </router-link>
      </li>
      <li class="b-navigation__list">
        <router-link to="" v-scroll-to="'#footer'" class="router-link">{{
            path ? 'Contacts' : 'Контакты'
          }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      path: this.$route.path === '/',
      nav: [
        'Home',
        'About me',
        'Skills',
        'Portfolio',
        'Contacts'
      ]
    }
  }
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

      @include media-breakpoint-down(xs) {
        padding: 10px;
      }
    }

    @include media-breakpoint-down(xs) {
      flex-direction: column;
      align-items: center;
    }
  }
}

</style>