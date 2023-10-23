<script>
import BurgerIcon from "../icons/BurgerIcon.vue";
import SerachIcon from "../icons/SerachIcon.vue";
import UserIcon from "../icons/UserIcon.vue";
import MobileCatalog from "./MobileCatalog.vue";

export default {
  name: "HeaderMobile",
  components: {MobileCatalog, UserIcon, SerachIcon, BurgerIcon},

}
</script>

<template>
  <header class="header__mobile">
    <div class="container">
      <div class="menu">
        <a href="#burger" uk-toggle><BurgerIcon/></a>
      </div>
      <div class="logo">
        <a href=""><img src="@/assets/img/icons/logo.svg" width="38" height="40" alt=""></a>
      </div>
      <div class="user__btns">
        <div class="search">
          <a href=""><SerachIcon/></a>
        </div>
        <div class="profile">
          <a href=""> <UserIcon/> </a>
        </div>
      </div>
    </div>
  </header>
  <MobileCatalog/>
</template>

<style  lang="scss">
.header__mobile{
  background-color: $black;
  padding: 12px 0;
  .container{
    display: grid;
    grid-template-columns: 75px 1fr 75px;
  }
  .menu{
    align-self: center;
  }
  .logo{
    justify-self: center;
  }
  .user__btns{
    align-self: center;
    display: flex;
    justify-content: space-between;
    svg{
      width: 24px;
      height: 24px;
    }
    .search{
      svg{
        path{
          stroke: white;
        }
      }
    }
  }
}
</style>