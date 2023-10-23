<template>
  <header class="header">
    <div class="top__bar">
      <div class="container">
        <div class="top__bar-phone">
          Відділ продажу: <a href="tel:380673542220">+38 (067) 354 22 20</a>
        </div>
        <div class="top__bar-nav">
          <div class="city">
            <div class="title">Ваше місто:</div>
            <div class="drop">
              <a href="#" class="current">Київ </a>
              <div uk-dropdown="pos:bottom-right">
                <ul>
                  <li><a href="">Харків</a></li>
                  <li><a href="">Львів</a></li>
                  <li><a href="">Дніпро</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="lang">
            <div class="drop">
              <a href="#" class="current">UA</a>
              <div uk-dropdown="pos:bottom-right">
                <ul>
                  <li><a href="">EN</a></li>
                  <li><a href="">RU</a></li>
                </ul>
              </div>
            </div>
          </div>
          <a class="profile">
            <img src="@/assets/img/icons/User.svg" width="16" height="16" alt="">
            <span>
              Особистий кабінет
            </span>
          </a>
        </div>
      </div>

    </div>
    <div class="main__bar">
      <div class="container">
        <div class="logo">
          <a href=""><img src="@/assets/img/icons/logo.svg" width="55" height="58" alt=""></a>
        </div>
        <div class="main__bar-mid">
          <div class="bar__btns">
            <div class="catalog">
              <a href="" class="catalog__btn btn-red">
                <CatalogIcon class="icon"></CatalogIcon>
                Каталог
                <OpenCatalogIcon class="open__icon"/>
              </a>
              <div uk-dropdown="pos:bottom-left; offset:26" class="main__categories">
                <ul class="catalog__list first__level">
                  <li class="catalog__item">
                    <a href="">Дегустаційні набори
                      <ChevronRightIcon/>
                    </a>
                    <div uk-dropdown="pos:right-center; delay-hide:30" class="second__level">
                      <ul class="catalog__list ">
                        <li class="catalog__item">
                          <a href="">Бульйон
                            <ChevronRightIcon/>
                          </a>
                        </li>
                        <li class="catalog__item">
                          <a href="">Лимонад
                            <ChevronRightIcon/>
                          </a>
                        </li>
                        <li class="catalog__item">
                          <a href="">чай
                            <ChevronRightIcon/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="catalog__item">
                    <a href="">Напої
                      <ChevronRightIcon/>
                    </a>
                    <div uk-dropdown="pos:right-center;delay-hide:30" class="second__level">
                      <ul class="catalog__list ">
                        <li class="catalog__item">
                          <a href="">Чай
                            <ChevronRightIcon/>
                          </a>
                          <div uk-dropdown="pos:right-center;delay-hide:30" class="third__level">
                            <Simplebar :autoHide="false" class="simplebar__elem">
                              <ul class="third__level-list">
                                <li v-for="i in 40" class="third__level-item">
                                  <a href="" class="third__level-link">
                                    <div class="img__wrapper">
                                      <img src="@/assets/img/prod.png" width="70" height="50" alt="">
                                    </div>
                                    <div class="title__wrapper">
                                      <div class="title">
                                        Чай "Асорті" (12 шт), 50 г.
                                      </div>
                                      <div class="price__qty">
                                        <span class="price">
                                          294,84 грн.
                                        </span>
                                        <span class="qty">
                                          1 уп.
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </Simplebar>
                          </div>
                        </li>
                        <li class="catalog__item">
                          <a href="">Бульйон
                            <ChevronRightIcon/>
                          </a>
                        </li>
                        <li class="catalog__item">
                          <a href="">Лимонад
                            <ChevronRightIcon/>
                          </a>
                        </li>
                      </ul>
                    </div>

                  </li>
                  <li class="catalog__item">
                    <a href="">Перші страви
                      <ChevronRightIcon/>
                    </a>
                  </li>
                  <li class="catalog__item">
                    <a href="">Другі страви
                      <ChevronRightIcon/>
                    </a>
                  </li>
                  <li class="catalog__item">
                    <a href="">Фуд конструктор
                      <ChevronRightIcon/>
                    </a>
                  </li>
                  <li class="catalog__item">
                    <a href="">Хлібобулочні вироби
                      <ChevronRightIcon/>
                    </a>
                  </li>
                  <li class="catalog__item">
                    <a href="">Фаст фуд
                      <ChevronRightIcon/>
                    </a>
                  </li>
                  <li class="catalog__item">
                    <a href="">На вугіллі
                      <ChevronRightIcon/>
                    </a>
                  </li>
                  <li class="catalog__item">
                    <a href="">Напівфабрикати
                      <ChevronRightIcon/>
                    </a>
                  </li>
                  <li class="catalog__item">
                    <a href="">Соуси
                      <ChevronRightIcon/>
                    </a>
                  </li>
                  <li class="catalog__item">
                    <a href="">Десерти
                      <ChevronRightIcon/>
                    </a>
                  </li>
                  <li class="catalog__item">
                    <a href="">Інші товари
                      <ChevronRightIcon/>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
            <div class="btn__wrapper">
              <a class="btn btn-white">
                <BusinessIcon class="icon"></BusinessIcon>
                Почати бізнес
              </a>
            </div>
          </div>
          <nav class="nav">
            <NavList></NavList>
          </nav>
        </div>

        <div class="usr__btns">
          <div class="search">
            <a href="#" class="user__btns-btn">
              <SearchIcon></SearchIcon>
            </a>
          </div>
          <div class="wishlist">
            <a href="#" class="user__btns-btn">
              <WishlistIcon></WishlistIcon>
              <span class="count">
                1
              </span>
            </a>
          </div>
          <div class="cart">
            <a href="#" class="user__btns-btn">
              <CartIcon></CartIcon>
              <span class="count">
                1
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>
<script>
import SearchIcon from "../icons/SerachIcon.vue"
import WishlistIcon from "../icons/WishlistIcon.vue"
import CartIcon from "../icons/CartIcon.vue"
import BusinessIcon from "../icons/BusinessIcon.vue"
import CatalogIcon from "../icons/CatalogIcon.vue"
import NavList from "../NavList.vue";
import ChevronRightIcon from "../icons/ChevronRightIcon.vue";
import OpenCatalogIcon from "../icons/OpenCatalogIcon.vue";

import Simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';

export default {
  components: {
    OpenCatalogIcon,
    ChevronRightIcon,
    NavList,
    SearchIcon,
    WishlistIcon,
    CartIcon,
    CatalogIcon,
    BusinessIcon,
    Simplebar
  }
}

</script>
<style lang="scss">

.header {
  border-bottom: 1px solid $gray-light;

  .top__bar {
    background-color: $dark;
    width: 100%;
    color: white;

    .container {
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .top__bar-phone {
      a {
        font-weight: 600;
      }
    }

    .top__bar-nav {
      display: flex;
      align-items: center;
      gap: 36px;

      .current {
        position: relative;
        padding-right: 19px;
        font-weight: 600;

        &:before {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          transition: .3s;
          right: 0;
          display: block;
          content: '';
          width: 14px;
          height: 14px;
          background: url("@/assets/img/icons/chevron.svg");
        }
      }

      .drop {
        .uk-dropdown {
          min-width: 50px;

          ul {
            li {
              padding: 5px;
            }
          }
        }

      }

      .city {

        display: flex;
        align-items: center;

        .title {
          margin-right: 6px;

        }

        .current__city {
          font-weight: 600;
          line-height: 18px;
        }
      }

      .profile {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 600;
      }
    }
  }

  .main__bar {
    .container {
      padding: 18px 40px;
      display: grid;
      grid-template-columns: 152px 1fr 152px;
      grid-gap: 18px;
    }

    .usr__btns {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .user__btns-btn {
        position: relative;

        .count {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 20px;
          height: 20px;
          color: white;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $red;
          border-radius: 100%;
          font-weight: 500;
        }
      }
    }

    .main__bar-mid {
      display: grid;
      grid-template-columns:370px 1fr;

      .nav {
        display: flex;
        align-items: center;
        padding: 0 15px;
        justify-content: center;

      }

      .bar__btns {
        display: grid;
        grid-template-columns: 150px 205px;
        grid-gap: 15px;

        .catalog {

        }
      }

      .btn-red {
        @include btn-red;
      }

      .btn-white {
        @include btn-white;
      }

      .catalog {
        .uk-dropdown {
          padding: 0;
          width: 280px;
          box-shadow: none;
        }

        .main__categories {
          background-color: white;
          border-radius: 0px 0px 0px 9px;
        }

        .catalog__btn {
          position: relative;

          .open__icon {
            transition: 0.1s;
            opacity: 0;
            visibility: hidden;
            position: absolute;
            bottom: 0;
            right: 50%;
            transform: translateX(50%);
          }

          &[aria-expanded="true"] {
            .open__icon {
              visibility: visible;
              opacity: 1;
              bottom: -8px;
            }
          }
        }

        .first__level {

        }

        .second__level {

          top: 0 !important;
          left: 100% !important;
          bottom: 0;
          background-color: $gray-ultra-light;
        }

        .third__level {
          top: 0 !important;
          left: 100% !important;

          width: 880px;
          border-radius: 0px 0px 9px 0px;

          .simplebar__elem {
            max-height: 548px;

            .simplebar-vertical {
              right: 0;
              width: 6px;
              background-color: $gray-light;

              .simplebar-scrollbar:before {
                background: $red;
                width: 6px;
                left: 0;
                right: 0;
                border-radius: 0;
                opacity: 1;
              }
            }

            &:before {
              left: 0;
              right: 6px;
              bottom: 0;
              content: '';
              position: absolute;
              height: 50px;
              z-index: 5;
              background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.95) 67.19%);
            }
          }

          .third__level-list {
            display: grid;
            padding: 20px;
            grid-template-columns: 1fr 1fr;
            grid-gap: 14px 20px;
            position: relative;
            background-color: white;


            .third__level-item {
              position: relative;
              z-index: 1;

              a {
                border-radius: 9px;
                border: 1px solid $gray-light;
                display: grid;
                padding: 20px 15px;
                text-transform: none;
                grid-template-columns: 70px 1fr;
                grid-gap: 10px;

                .img__wrapper {
                  align-self: center;
                  justify-self: center;
                }

                .title__wrapper {
                  display: flex;
                  flex-direction: column;
                  align-content: center;
                  gap: 4px;
                  color: #232323;
                  text-overflow: ellipsis;
                  font-size: 15px;
                  font-weight: 500;
                  line-height: 20px;

                  .title {
                    overflow: hidden;
                  }

                  .price__qty {
                    .price {
                      margin-right: 6px;
                    }

                    .qty {
                      font-size: 13px;
                      font-weight: 600;
                      color: $gray-dark;
                    }
                  }
                }


              }

            }
          }

        }
      }

      .catalog__list {
        padding: 10px 0;

        .catalog__item {
          &:last-child {
            a {
              border-bottom: 1px solid transparent;
            }
          }

          a {
            display: flex;
            justify-content: space-between;
            padding: 11px 20px;
            border-bottom: 1px solid $gray-light;
            color: #000 !important;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 21px;
            text-transform: uppercase;
            transition: 0.3s;

            svg {
              path {
                transition: 0.2s;
              }
            }

            &:hover, &[aria-expanded="true"] {
              color: $red !important;

              svg {
                path {
                  stroke: $red;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1700px) {
  .header .main__bar .main__bar-mid .catalog .third__level {
    width: 600px;
  }
}

@media screen and (max-width: 1600px) {
  .header .main__bar .container {
    grid-template-columns: 70px 1fr 100px;
  }
}

@media screen and (max-width: 1400px) {
  .header .main__bar .container {
    padding: 15px;
  }
}

@media screen and (max-width: 1370px) {
  .header .main__bar .main__bar-mid {
    .btn__wrapper {
      align-self: center;
    }

    .catalog {
      align-self: center;

      .uk-dropdown {
        width: 240px;
      }

      .third__level {
        width: 600px;
      }
    }

    .catalog__list .catalog__item a {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 1230px) {
  .header .main__bar {
    .container{
      grid-template-columns: 55px 1fr 100px;
      grid-gap: 10px;
    }
    .main__bar-mid {
      grid-template-columns: 292px 1fr;

      .bar__btns {
        grid-gap: 10px;
        grid-template-columns: 1fr 1.4fr;
      }

      .nav {
        padding: 0;
      }

      .catalog {
        .third__level {
          width: 400px;
        }

        .third__level {
          .third__level-list {
            grid-template-columns: 1fr;
          }
        }
      }
    }
  }
}
</style>