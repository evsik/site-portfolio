<template>
  <div class="b-skills">
    <div class="container">
      <div class="b-skills__textWrapper">
        <h2 class="b-skills__head" v-html="path ? head : headRu">
        </h2>
        <p class="b-skills__text" v-html="path ? text : textRu">ё
        </p>
      </div>
      <div class="b-skillsBlock multiple-items">
        <Item
            v-for="item of this.$store.state.dataArr"
            :item="item"
            :key="item.id_skills"
        />
      </div>
      <!--      BLock for phone size-->
      <div class="b-skillsBlock_phone autoplay">
        <Item
            v-for="item of this.$store.state.dataArr"
            :item="item"
            :key="item.id_skills"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item";
import $ from "jquery"

export default {
  name: "Skills",
  data() {
    return {
      mQuery: window.matchMedia('(max-width: 565px)'),
      path: this.$route.path === '/',
      text: `
         I use a stack of technologies such as:
      `,
      textRu: `
          Я использую стек технологий:
      `,
      head: `Skills`,
      headRu: `Навыки`,
    }
  },
  components: {
    Item
  },
  mounted() {
    this.$store.commit('getData')
    //При отрисовке сайта запуск слушателя на изменение размеров экрана
    this.mQuery.addListener(this.handleMobilePhoneResize)
  },
  updated() {
    this.carouselForPhone()
    this.carouselForDesk()
    //Проверка при запуске сайта с какого устройста вход
    this.changingBlock(this.mQuery)
  },
  methods: {
    carouselForPhone() {
      $('.autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      })
    },
    carouselForDesk() {
      $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
      });
    },
    handleMobilePhoneResize(e) {
      this.changingBlock(e)
    },
    //Метод на проверку размеров экрана
    changingBlock(e) {
      if (e.matches) {
        document.querySelector('.b-skillsBlock').style.display = 'none'
        document.querySelector('.b-skillsBlock_phone').style.display = 'block'
        // this.carouselForPhone()
      } else {
        document.querySelector('.b-skillsBlock').style.display = 'block'
        document.querySelector('.b-skillsBlock_phone').style.display = 'none'
        // this.carouselForDesk()
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';
@import '../../layout/styles/_varText.scss';

.b-skills {
  padding: 100px 0 100px 0;

  .container {
    .b-skills__textWrapper {
      margin-bottom: 80px;

      .b-skills__head {
        @extend %headText
      }

      .b-skills__text {
        @extend %descText
      }
    }

    .b-skillsBlock {
      display: flex;
      justify-content: space-between;

    }

    .b-skillsBlock_phone {
      display: flex;
      justify-content: space-between;
    }
  }
}

.slick-prev {
  left: 0 !important;
  z-index: 2;
}

.slick-next {
  right: 4px !important;
  z-index: 2;
}

.slick-prev:before, .slick-next:before {
  color: #070707 !important;
  font-size: 40px !important;
  font-family: "Font Awesome\ 5 Free" !important;
  font-weight: 900 !important;
}

.slick-prev:before {
  content: "\f053" !important;
}

.slick-next:before {
  content: "\f054" !important;
}

</style>