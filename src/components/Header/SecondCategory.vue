<script>
import BurgerTemplate from "./BurgerTemplate.vue";
import UIkit from "uikit";
export default {
  name: "SecondCategory",
  components: {BurgerTemplate},
  data(){
    return{
      item: {}
    }
  },
  mounted() {
    this.emitter.on("open-submenu", item => {
      this.item = item;
      UIkit.offcanvas(this.$refs.second_category.$el).show()
    });
  },
}
</script>

<template>
  <BurgerTemplate ref="second_category" class="submenu">
    <div class="top__nav">
      <div class="back__btn">
        <a href="#mobile__catalog" uk-toggle>
          <img src="../../assets/img/icons/chevron-right.svg" alt="">
          Назад
        </a>
      </div>
      <div class="menu__title">
        {{item.category__title}}
      </div>
    </div>
    <ul class="menu__list">
      <li class="menu__item" v-for="i in item.children">
        <a href="" class="have__children">{{ i.children__title }}</a>
      </li>

    </ul>
  </BurgerTemplate>
</template>

<style  lang="scss">
.submenu {

  .uk-offcanvas-bar {
    padding: 0;
  }
}

.submenu {

  .top__nav {
    height: 64px;
    width: 100%;
    padding: 11px 26px;
    color: $black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $gray-light;

    .back__btn {
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      img {
        transform: rotateZ(180deg);
      }
    }

    .menu__title {
      font-size: 17px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
    }
  }

  .menu__list {
    padding: 0 26px;
    width: 100%;
    gap: 0;
    flex-direction: column;
    align-items: flex-start;

    .menu__item {
      width: 100%;

      &:last-child {
        a {
          border-bottom-color: transparent;
        }
      }

      a {
        display: block;
        padding: 11px 15px 11px 0;
        font-size: 16px;
        font-weight: 500;
        border-bottom: 1px solid $gray-light;
        width: 100%;
        position: relative;
        font-style: normal;
        line-height: 20px;
        text-transform: uppercase;
        color: black !important;

        &.have__children:after {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 15px;
          height: 15px;
          content: '';
          background-image: url("../../assets/img/icons/chevron-right.svg");
        }
      }

    }


  }

}
</style>