<script>
import Header from "./components/Header/Header.vue";
import HeaderMobile from "./components/Header/HeaderMobile.vue";
import {computed} from "vue";
import MobileBurger from "./components/Header/MobileBurger.vue";
import Footer from "./components/Footer.vue";
import MobileNav from "./components/MobileNav.vue";

export default {

  data() {
    return {
      isMobile: false
    }
  },
  created() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile)
  },
  provide() {
    return {
      // explicitly provide a computed property
      isMobile: computed(() => this.isMobile)
    }
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 992
    }
  },
  components: {
    MobileNav,
    Footer,
    MobileBurger,
    HeaderMobile,
    Header
  }
}
</script>

<template>
  <Header v-if="!isMobile"/>
  <HeaderMobile v-else></HeaderMobile>
  <div class="content">
    <div class="catalog__overlay"></div>
    <RouterView/>
  </div>
  <Footer/>
  <MobileNav v-if="isMobile"/>
  <MobileBurger v-if="isMobile"></MobileBurger>
</template>

<style lang="scss">
.content {
  position: relative;
  z-index: 1;

  .catalog__overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.35);
    transition: 0.2s;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
  }

}

body:has(.catalog__btn[aria-expanded="true"]) {
  .content .catalog__overlay {
    visibility: visible;
    opacity: 1;
    z-index: 2;
  }
}
</style>
