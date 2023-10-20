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
        <a href=""><img src="@/assets/img/logo.svg" width="55" height="58" alt=""></a>
      </div>
      </div>
    </div>
  </header>

</template>
<script>
export default {}

</script>
<style lang="scss">
.header {
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
      .current{
        position: relative;
        padding-right: 19px;
        font-weight: 600;
        &:before{
          position: absolute;
          top:50%;
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
      .drop{
        .uk-dropdown{
        min-width: 50px;
          ul{
            li{
              padding: 5px;
            }
          }
        }

      }
      .city{

        display: flex;
        align-items: center;
        .title{
          margin-right: 6px;

        }
        .current__city{
          font-weight: 600;
          line-height: 18px;
        }
      }
      .profile{
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 600;
      }
    }
  }
  .main__bar{
    .container{
      padding: 18px 40px;
    }
  }
}
</style>