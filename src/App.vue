<script>
import Header from "./components/Header/Header.vue";
export default {
  created() {

  },
  methods:{
    mobileDetect(){

    }
  },
  components:{
    Header
  }
}
</script>

<template>
  <Header/>
  <div class="content">
    <div class="catalog__overlay"></div>
    <RouterView/>
  </div>
</template>

<style lang="scss">
.content{
  height: 100vh;
  position: relative;
  z-index: 1;
  .catalog__overlay{
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
body:has(.catalog__btn[aria-expanded="true"]){
  .content .catalog__overlay{
    visibility: visible;
    opacity: 1;
    z-index: 2;
  }
}
</style>
