<script>
import UserIcon from "./icons/UserIcon.vue";
import MobileCatalogIcon from "./icons/MobileCatalogIcon.vue";
import WishlistIcon from "./icons/WishlistIcon.vue";
import CartIcon from "./icons/CartIcon.vue";

export default {
  name: "MobileNav",
  components: {CartIcon, WishlistIcon, MobileCatalogIcon, UserIcon}
}
</script>

<template>
  <div class="mobile__nav">
    <div class="mobile__links">
      <a href="" class="link">
        <div class="icon">
        <UserIcon/>
        </div>
        <div class="title">
          Кабінет
        </div>
      </a>
      <a href="#mobile__catalog" class="link" uk-toggle>
        <div class="icon">
          <MobileCatalogIcon/>
        </div>
        <div class="title">
          Каталог
        </div>
      </a>
      <a href="" class="link">
        <div class="icon">
         <WishlistIcon></WishlistIcon>
          <span class="count">1</span>
        </div>
        <div class="title">
          Бажанні
        </div>
      </a>
      <a href="" class="link">
        <div class="icon">
         <CartIcon/>
          <span class="count">1</span>
        </div>
        <div class="title">
          Кошик
        </div>
      </a>
    </div>

  </div>

</template>

<style  lang="scss">
.mobile__nav{
  padding: 10px 26px;
  background-color:#333538 ;
  border-radius: 20px 20px 0px 0px;
  position: sticky;
  bottom: 0;
  margin-top: -18px;
  z-index: 5;
  .mobile__links{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .link{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon{
        width: 22px;
        height: 22px;
        position: relative;
        .count{
          position: absolute;
          top: -5px;
          right: -5px;
          background-color: $red;
          border-radius: 100%;
          width: 16px;
          height: 16px;
          font-size: 9px;
          font-weight: 500;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        svg{
          path{
            stroke: white;
          }
        }
      }
      .title{
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        text-align: center;
        color: #F9F9F9;
      }
    }
  }
}

</style>