<script>
export default {
  name: "NavList"
}
</script>

<template>
  <ul class="nav__list">
    <li class="nav__list-item">
      <a href="">Акції</a>
    </li>
    <li class="nav__list-item">
      <a href="">Про продукцію</a>
    </li>
    <li class="nav__list-item">
      <a href="">Про компанію</a>
    </li>
    <li class="nav__list-item">
      <a href="">Доставка</a>
    </li>
    <li class="nav__list-item">
      <a href="">Блог</a>
    </li>
    <li class="nav__list-item">
      <a href="">Контакти</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.nav__list {
  display: flex;
  gap: 50px;
  align-items: center;

  .nav__list-item {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    text-transform: uppercase;

    a {
      color: black !important;
    }
  }
}

@media screen and (max-width: 1600px) {
  .nav__list {
    gap: 25px;
  }
}

@media screen and (max-width: 1370px) {
  .nav__list {
    gap: 15px;
    .nav__list-item{
      font-size: 14px;
    }
  }
}
@media screen and (max-width: 1230px) {
  .nav__list {
    gap: 10px;
    .nav__list-item{
      font-size: 13px;
    }
  }
}
</style>