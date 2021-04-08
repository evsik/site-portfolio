<template>
  <footer class="b-footer">
    <div class="container">
      <div class="b-footer__textWrapper">
        <h2 class="b-footer__head">
          Contacts
        </h2>
        <p class="b-footer__text">
          Want to know more or just chat?
          <br>
          You are welcome!
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
      <p class="b-footer__runningTitle">
        Like me on
        <br>
        LinkedIn, Facebook, Telegram, Github
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
      isActive: false,
    }
  }
}
</script>

<style lang="scss">

.b-footer {
  padding: 100px 0 100px 0;

  .container {
    .b-footer__textWrapper {
      margin-bottom: 80px;

      .b-footer__head {
        font-family: Gilroy, serif;
        font-size: 34px;
        line-height: 42px;
        text-align: center;
        color: #070707;
        margin-bottom: 20px;
        font-weight: 600;
      }

      .b-footer__text {
        font-family: Gilroy, serif;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #070707;
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