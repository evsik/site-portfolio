<template>
  <a href="mailto:evsevsikov@gmail.com" class="pulsate-fwd b-btnSendMsg" v-html="path ? text : textRu"></a>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      path: this.$route.path === '/',
      text: `Send message`,
      textRu: `Связаться`,
    }
  },
}
</script>

<style scoped lang="scss">
.b-btnSendMsg {
  display: inline-block;
  background: #070707;
  height: 38px;
  width: 166px;
  color: white;
  font-family: Gilroy, serif;
  font-size: 18px;
  line-height: 38px;
  text-align: center;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 600;
  transition: 1s;

  &:hover {
    background-color: #f6f6f6;
    color: #070707;
  }

  &:active {
    background-color: #f68123;
  }
}
</style>