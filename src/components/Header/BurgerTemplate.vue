<script>
import CloseIcon from "../icons/CloseIcon.vue";
import WaveIcon from "../icons/WaveIcon.vue";

export default {
  name: "BurgerTemplate",
  components: {WaveIcon, CloseIcon}
}
</script>

<template>
  <div uk-offcanvas="overlay:true" class="default__burger">
    <div class="close__block">
      <div class="wave">
        <WaveIcon/>
      </div>
      <button class="uk-offcanvas-close" type="button">
        <CloseIcon/>
      </button>
    </div>
    <div class="uk-offcanvas-bar">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
.default__burger {
  &:before {
    background: rgba(0, 0, 0, 0.35);
  }

  .close__block {
    position: absolute;
    left: -60px;
    top: 50%;
    width: 60px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.45s;

    .uk-offcanvas-close {
      display: flex;
      width: 32px;
      height: 32px;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      background-color: white;
      margin-top: -4px;
    }
  }

  .uk-offcanvas-bar {
    overflow-x: hidden;
    width: 300px;
    left: -300px;
    background-color: white;
    padding: 20px 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;

  }

  &.uk-open {
    .close__block {
      left: 294px;
    }

    .uk-offcanvas-bar {
      left: 0;
    }
  }
}
</style>