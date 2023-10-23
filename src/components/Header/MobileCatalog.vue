<script>
import BurgerTemplate from "./BurgerTemplate.vue";
import SecondCategory from "./SecondCategory.vue";

export default {
  name: "MobileCatalog",
  components: {SecondCategory, BurgerTemplate},
  data(){
    return{
      catalog__items:[
        {
          category__title: 'Дегустаційні набори',
          children:[
            {
              children__title:"Чай",
            },
            {
              children__title:"Бульйони",
            },
            {
              children__title:"Лимонад",
            }
          ]
        },
        {
          category__title: 'Напої',
          children:[
            {

              children__title:"Чай",
            },
            {
              children__title:"Бульйони",
            },
            {
              children__title:"Лимонад",
            }
          ]
        },
        {
          category__title: 'Перші страви',
          children:[
            {
              children__title:"Чай",
            },
            {
              children__title:"Бульйони",
            },
            {
              children__title:"Лимонад",
            }
          ]
        },
        {
          category__title: 'Другі страви',
          children:[
            {
              children__title:"Чай",
            },
            {
              children__title:"Бульйони",
            },
            {
              children__title:"Лимонад",
            }
          ]
        },
        {
          category__title: 'Фуд конструктор',
          children:[
            {
              children__title:"Чай",
            },
            {
              children__title:"Бульйони",
            },
            {
              children__title:"Лимонад",
            }
          ]
        },
        {
          category__title: 'Хлібобулочні вироби',
          children:[
            {
              children__title:"Чай",
            },
            {
              children__title:"Бульйони",
            },
            {
              children__title:"Лимонад",
            }
          ]
        },
        {
          category__title: 'Фаст фуд',
          children:[
            {
              children__title:"Чай",
            },
            {
              children__title:"Бульйони",
            },
            {
              children__title:"Лимонад",
            }
          ]
        },
        {
          category__title: 'На вугіллі',
          children:[
            {
              children__title:"Чай",
            },
            {
              children__title:"Бульйони",
            },
            {
              children__title:"Лимонад",
            }
          ]
        },
        {
          category__title: 'Напівфабрикати',
          children:[
            {
              children__title:"Чай",
            },
            {
              children__title:"Бульйони",
            },
            {
              children__title:"Лимонад",
            }
          ]
        },
        {
          category__title: 'Соуси',
          children:[
            {
              children__title:"Чай",
            },
            {
              children__title:"Бульйони",
            },
            {
              children__title:"Лимонад",
            }
          ]
        },
        {
          category__title: 'Десерти',
          children:[
            {
              children__title:"Чай",
            },
            {
              children__title:"Бульйони",
            },
            {
              children__title:"Лимонад",
            }
          ]
        }
      ]
    }
  },
  methods:{
    openSubmenu(item){
      if (item.children.length){
        this.emitter.emit('open-submenu', item)
      }

    }
  }
}
</script>

<template>
  <BurgerTemplate id="mobile__catalog" class="second__menu">
    <div class="top__nav">
      <div class="back__btn">
        <a href="#burger" uk-toggle>
          <img src="../../assets/img/icons/chevron-right.svg" alt="">
          Назад
        </a>
      </div>
      <div class="menu__title">
        Меню каталога
      </div>
    </div>
    <ul class="menu__list">
      <li class="menu__item" v-for="item in catalog__items">
        <a href="" v-if="item.children.length" class="have__children" @click.prevent="openSubmenu(item)">{{ item.category__title }}</a>
        <a href="" v-else>{{ item.category__title }}</a>
      </li>

    </ul>
  </BurgerTemplate>
  <SecondCategory />
</template>

<style lang="scss">
#mobile__catalog {

  .uk-offcanvas-bar {
    padding: 0;
  }
}

.second__menu {

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