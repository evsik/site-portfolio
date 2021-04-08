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
    </div>
  </footer>
</template>

<script>
import Button from "./Button";

export default {
  name: "Footer",
  components: {
    Button
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
  }
}

</style>