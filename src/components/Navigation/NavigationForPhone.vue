<template>
  <div class="menuForPhone">
    <div id="nav" class="navigation" v-click-outside="hideMenu"
         :class="{ active: $store.state.activeMenu }">
      <div class="navigation__inner">
        <Navigation></Navigation>
        <div class="b-social_navForPhone">
          <Social
              v-for="social of $store.state.socials"
              :key="social.title"
              :social="social"
          />
        </div>
        <div class="b-phone_phoneForNav">
          <Phone/>
        </div>
      </div>
    </div>
    <button id="show" @click="$store.state.activeMenu = !$store.state.activeMenu">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Social from "../Socials/Social";
import Phone from "../Phone/Phone";
import ClickOutside from 'vue-click-outside'

export default {
  name: "NavigationForPhone",
  components: {
    Navigation,
    Social,
    Phone
  },
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
  },
  mounted() {
    this.popupItem = this.$el
  },
  methods: {

    hideMenu() {
      this.$store.state.activeMenu = false
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../../node_modules/bootstrap-vue/src/index.scss';

.menuForPhone {
  display: none !important;

  @include media-breakpoint-down(xs) {
    display: block !important;
    grid-area: 1/2;
    align-self: flex-start;
    justify-self: end;
  }
}

// position: left or right
// width: unit px
// backgroundColor
// duration: unit ms
$elastic: (
    position: left,
    width: 300,
    backgroundColor: #ffffff,
    duration: 300,
);


// get key
$position: map-get($elastic, 'position');
$width: map-get($elastic, 'width');
$backgroundColor: map-get($elastic, 'backgroundColor');
$duration: map-get($elastic, 'duration');
// css button
#show {
  background-color: transparent;
  border: 0;
  color: #070707;
  padding: 10px 4px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  font-size: x-large;
}

// Start
.navigation {
  position: fixed;
  width: 50%;
  height: 100%;
  top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  opacity: 0;
  visibility: hidden;
  z-index: 99;
  transition-delay: $duration*1ms;
  @if ($position == right) {
    right: 0;
  } @else if ($position == left) {
    left: 0;
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;

    .navigation__inner {
      background-color: $backgroundColor;
      transform: translate(0, 0);
      transition: transform $duration*1ms linear, background-color 0s linear ($duration*2-1)*1ms;

      &:after {
        width: 300%;
        border-radius: 50%;
        animation: elastic ($duration/2)*1ms ease ($duration+0.5)*1ms both;
      }
    }
  }
}

.navigation__inner {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 999999;
  @if ($position == right) {
    transform: translate(100%, 0);
  } @else if ($position == left) {
    transform: translate(-100%, 0);
  }
  transition: transform $duration*1ms linear, background-color 0s linear $duration*1ms;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    @if ($position == right) {
      left: 0;
    } @else if ($position == left) {
      right: 0;
    }
    background-color: $backgroundColor;
    border-radius: 50%;
    z-index: -1;
    transition: all $duration*1ms linear;

  }
}

@keyframes elastic {
  0% {
    border-radius: 50%;
  }
  45% {
    border-radius: 0;
  }
  65% {
    @if ($position == right) {
      border-top-left-radius: 40px 50%;
      border-bottom-left-radius: 40px 50%;
    } @else if ($position == left) {
      border-top-right-radius: 40px 50%;
      border-bottom-right-radius: 40px 50%;
    }
  }
  80% {
    border-radius: 0;
  }
  90% {
    @if ($position == right) {
      border-top-left-radius: 20px 50%;
      border-bottom-left-radius: 20px 50%;
    } @else if ($position == left) {
      border-top-right-radius: 20px 50%;
      border-bottom-right-radius: 20px 50%;
    }
  }
  100% {
    border-radius: 0;
  }
}

.b-social_navForPhone {
  display: flex;
  justify-content: space-evenly;

  .b-social {
    font-size: 30px;
  }
}

.b-phone_phoneForNav {
  margin-top: 20px;
}
</style>