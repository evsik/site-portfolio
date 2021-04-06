<template>
  <div class="b-work">
    <div class="b-work__img">
      <img :src="item.screen" alt="#">
    </div>
    <a :href="item.workLink" class="b-work__link" @click="isActive = true"
       :class="{ trackingOutExpand: isActive }">
      {{ item.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Item",

  data() {
    return {
      isActive: false,
    }
  },
  props: {
    item: {type: Object}
  }
}
</script>

<style lang="scss">
.b-work {
  margin-bottom: 100px;

  .b-work__img {
    margin-bottom: 45px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .b-work__link {
    font-family: Gilroy, serif;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    text-decoration-line: underline;
    color: #070707;

    &:hover {
      color: #f68123;
    }
  }
}

.trackingOutExpand {
  -webkit-animation: trackingOutExpand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: trackingOutExpand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes trackingOutExpand {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 0.8;
  }
  100% {
    letter-spacing: 1em;
    opacity: 0;
  }
}

@keyframes trackingOutExpand {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 0.8;
  }
  100% {
    letter-spacing: 1em;
    opacity: 0;
  }
}

</style>