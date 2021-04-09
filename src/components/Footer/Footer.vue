<template>
  <footer class="b-footer">
    <div class="container">
      <div class="b-footer__textWrapper">
        <h2 class="b-footer__head" v-html="path ? head : headRu">

        </h2>
        <p class="b-footer__text" v-html="path ? text : textRu">

        </p>
        <Button></Button>
      </div>
      <div class="b-socialBlock">
        <Social
            v-for="social of $store.state.socials"
            :key="social.title"
            :social="social"
        />
      </div>
      <p class="b-footer__runningTitle" v-html="path ? runningTitle : runningTitleRu">
      </p>
    </div>
  </footer>
</template>

<script>
import Button from "./Button";
import Social from "./Social";

export default {
  name: "Footer",
  components: {
    Button,
    Social
  },
  data() {
    return {
      path: this.$route.path === '/',
      runningTitle: `
              Contact me on
             <br>
              LinkedIn, Facebook, Telegram, Github
      `,
      runningTitleRu: `
              Свяжитесь со мной в
             <br>
              LinkedIn, Facebook, Telegram, Github
      `,
      head: `Contacts`,
      headRu: `Контакты`,
      text: `
                Want to know more or just chat?
                <br>
                You are welcome!
      `,
      textRu: `
      Хотите узнать больше или просто пообщаться?
        <br>
      Добро пожаловать!
      `,
    }
  },
}
</script>

<style lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';
@import '../../layout/styles/_varText.scss';

.b-footer {
  padding: 100px 0 100px 0;

  .container {
    .b-footer__textWrapper {
      margin-bottom: 80px;

      .b-footer__head {
        @extend %headText;
        margin-bottom: 20px;
      }

      .b-footer__text {
        @extend %descText;
        margin-bottom: 40px;
      }
    }

    .b-socialBlock {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 40px;
    }
  }
}

.b-footer__runningTitle {
  font-family: Gilroy, serif;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #828282;
}
</style>