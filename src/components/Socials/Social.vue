<template>
  <div class="b-social">
    <a :href="social.link" class="b-social__link" target="_blank">
      <i :class="social.class"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "Social",
  props: {
    social: {type: Object}
  }
}

</script>

<style scoped lang="scss">
.b-social {
  font-size: 50px;

  a {
    color: #070707;

    .fa-linkedin {

      &:hover {
        color: #0966c2;
      }
    }

    .fa-facebook-square {
      &:hover {
        color: #4867aa;
      }
    }

    .fa-telegram-plane {
      &:hover {
        color: #34abe3;
      }
    }

    .fa-github-square {
      &:hover {
        color: #360f4c;
      }
    }
  }
}
</style>