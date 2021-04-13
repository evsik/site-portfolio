<template>
  <div class="b-aboutMe">
    <div class="container">
      <h2 class="b-aboutMe__head" v-html="path ? head : headRu">

      </h2>
      <p class="b-aboutMe__text" v-html="path ? text : textRu">

      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      path: this.$route.path === '/',
      text: `
        Hi, I'm Ilya – Front-end Developer from Moscow. <br>
        I'm interested in Front-end, design and everything connected with it.
        <br>
        <br>
        I studied at courses "Front-end Developer" <br>
        in GeekBrains-Academy.
        <br>
        <br>
        Ready to implement excellent projects <br>
        with wonderful people.
      `,
      textRu: `
        Привет, меня зовут Илья – Фронт-энд разработчик из Москвы. <br>
        Меня интересует Фронт-энд, дизайн и все, что с ним связано.
        <br>
        <br>
        Я учился на курсах "Фронт-энд разработчик" <br>
        в GeekBrains-Академии.
        <br>
        <br>
        Готов реализовывать отличные проекты<br>
        с замечательными людьми.
      `,
      head: `About me`,
      headRu: `О себе`,
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';
@import '../../layout/styles/_varText.scss';

.b-aboutMe {
  background-color: #F6F6F6;
  padding: 120px 0 120px 0;

  .container {
    .b-aboutMe__head {
      @extend %headText
    }

    .b-aboutMe__text {
      @extend %descText
    }
  }
}
</style>