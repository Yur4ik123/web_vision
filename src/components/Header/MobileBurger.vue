<script>
import CatalogIcon from "../icons/CatalogIcon.vue";
import OpenCatalogIcon from "../icons/OpenCatalogIcon.vue";
import BusinessIcon from "../icons/BusinessIcon.vue";
import NavList from "../NavList.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import WaveIcon from "../icons/WaveIcon.vue";
import BurgerTemplate from "./BurgerTemplate.vue";

export default {
  name: "MobileBurger",
  components: {BurgerTemplate, WaveIcon, CloseIcon, NavList, BusinessIcon, OpenCatalogIcon, CatalogIcon}
}
</script>

<template>
  <BurgerTemplate id="burger">
    <div class="logo">
      <img src="@/assets/img/icons/logo.svg" width="57" height="55" alt="">
    </div>
    <div class="lang__switcher">
      <a href="" class="current">UA</a>
      <a href="">RU</a>
      <a href="">EN</a>
    </div>
    <div class="btns__wrapper">
      <a href="#mobile__catalog" class="catalog__btn btn-red" uk-toggle>
        <CatalogIcon class="icon"></CatalogIcon>
        Каталог
      </a>
      <a class="btn btn-white">
        <BusinessIcon class="icon"></BusinessIcon>
        Почати бізнес
      </a>
    </div>
    <nav class="nav__mobile">
      <NavList></NavList>
    </nav>
    <div class="contacts__block">
      <div class="contact__row">
        <div class="row__title">
          Адреса
        </div>
        <div class="row__value">
          04073, м. Київ, вул. Сирецька 28/2
        </div>
      </div>
      <div class="contact__row">
        <div class="row__title">
          Працюємо
        </div>
        <div class="row__value">
          <b>Пн-Нд з 9:00 до 21:00</b>
        </div>
      </div>
      <div class="contact__row">
        <div class="row__title">
          Продаж
        </div>
        <div class="row__value">
          <a href="tel:+380673542220"><b>+38(067) 354 22 20</b></a>
        </div>
        <div class="row__value">
          <a href="mailto:20sales@artofcooking.com.ua">20sales@artofcooking.com.ua</a>
        </div>
      </div>
      <div class="contact__row">
        <div class="row__title">
          Закупівля
        </div>
        <div class="row__value">
          <a href="tel:+380673252743"><b>+38 (067) 325 27 43</b></a>
        </div>
        <div class="row__value">
          <a href="mailto:purchasing@artofcooking.com.ua">purchasing@artofcooking.com.ua</a>
        </div>
      </div>
    </div>
  </BurgerTemplate>
</template>

<style lang="scss">
#burger {
  .lang__switcher {
    display: flex;
    justify-content: center;
    gap: 20px;

    a {
      font-family: 'IBM Plex Sans', sans-serif;
      color: black !important;
      text-transform: uppercase;
      font-size: 17px;
      font-weight: 600;
      line-height: 20px;

      &.current {
        color: $red !important;
      }
    }
  }

  .btns__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .btn-red {
      @include btn-red;
    }

    .btn-white {
      @include btn-white;
    }
  }

  .nav__mobile {
    width: 100%;

    .nav__list {
      gap: 0;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;

      .nav__list-item {
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

          &:after {
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

  .contacts__block {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;

    .row__title {
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: 300;
      line-height: 20px;
      color: $black;
    }

    .row__value {
      font-size: 15px;
      font-weight: 400;
      color: $black;
      line-height: 20px;
      margin-bottom: 10px;

      b {
        font-weight: 600;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

</style>