<script>
export default {
  name: "Footer"
}
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <div class="footer__logo">
          <img src="@/assets/img/icons/logo.svg" width="57" height="55" alt="">
        </div>
        <nav class="footer__nav">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="">Про продукцію</a>
            </li>
            <li class="footer__item">
              <a href="">Про компанію</a>
            </li>
            <li class="footer__item">
              <a href="">Акції</a>
            </li>
            <li class="footer__item">
              <a href="">Доставка</a>
            </li>
            <li class="footer__item">
              <a href="">Блог</a>
            </li>
            <li class="footer__item">
              <a href="">Контакти</a>
            </li>
            <li class="footer__item">
              <a href="">Повернення та обмін</a>
            </li>
          </ul>
        </nav>
        <div class="footer__contacts">
          <div class="footer__header">
            Чекаємо на вас
          </div>
          <div class="contacts__list">
            <div class="contact__row">
              <div class="row__title">
                Адреса
              </div>
              <div class="row__content">
                04073, м. Київ, вул. Сирецька 28/2
              </div>
            </div>
            <div class="contact__row">
              <div class="row__title">
                Працюємо
              </div>
              <div class="row__content">
                <div>Пн-нд</div>
                <div style="font-weight: 400;">
                  з 9:00 до 21:00
                </div>
              </div>
            </div>
            <div class="contact__row">
              <div class="row__title">
                Продаж
              </div>
              <div class="row__content">
                <a href="tel:+380673542220">
                  +38(067) 354 22 20
                </a>
                <a href="mailto:sales@artofcooking.com.ua" class="mail">sales@artofcooking.com.ua</a>
              </div>
            </div>
            <div class="contact__row">
              <div class="row__title">
                Закупівля
              </div>
              <div class="row__content">
                <a href="tel:+380673542220">
                  +38(067) 354 22 20
                </a>
                <a href="mailto:sales@artofcooking.com.ua" class="mail">sales@artofcooking.com.ua</a>
              </div>
            </div>

          </div>
        </div>
        <div class="footer__newssocnetw">
          <div class="news">
            <div class="footer__header">
              Отримуйте тільки свіжі новини
            </div>
            <form action="" class="news__form">
              <input type="email" placeholder="Ваш E-mail" required class="input">
              <button type="submit" class="submit__btn">OK</button>
            </form>
          </div>
          <div class="socnetw">
            <div style="display: none;" class="footer__logo-mobile">
              <img src="@/assets/img/icons/logo.svg" width="57" height="55" alt="">
            </div>
            <div class="socnetw__wrapper">
              <div class="footer__header">
                Ми у соцмережах
              </div>
              <div class="socnetw__items">
                <a href="" class="socnets__link">
                  <img src="@/assets/img/icons/facebook.svg" width="24" height="24"  alt="">
                </a>
                <a href="" class="socnets__link">
                  <img src="@/assets/img/icons/insta.svg" width="24" height="24"  alt="">
                </a>
                <a href="" class="socnets__link">
                  <img src="@/assets/img/icons/tiktok.svg" width="24" height="24"  alt="">
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="footer__bottom">
        <div class="links">
          <span class="link">
            © 2023 MealTime, Всі права захищені.
          </span>
          <a href="" class="link">
            Політика конфіденційності
          </a>
          <a href="" class="link">
            Угода користувача
          </a>
        </div>
        <a href="" class="sitemap">
          Мапа сайту
        </a>

      </div>
    </div>


  </footer>

</template>

<style lang="scss">
.footer {
  background-color: $black;

  .footer__container {
    max-width: 1530px;
    padding: 0 15px;
    width: 100%;
    margin: 0 auto;
  }

  .footer__top {
    padding: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1.4fr 1.2fr;
    grid-gap: 15px;
  }
  .footer__bottom{
    border-top: 1px solid #242424;
    padding: 30px 0;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    justify-content: space-between;
    .links{
      display: flex;
      gap: 30px;
    
    }
    .sitemap{
      text-decoration: underline !important;
    }
  }

  .footer__list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .footer__item {
      color: white;
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
    }
  }
  .footer__header {
    font-size: 16px;
    font-weight: 500;
    color: white;
    line-height: 20px;
    margin-bottom: 26px;
  }
  .footer__contacts {



    .contacts__list {
      display: flex;
      flex-direction: column;
      gap: 22px;

      .contact__row {
        display: grid;
        grid-template-columns: 90px 1fr;
        grid-gap: 20px;

        .row__title {
          font-size: 15px;
          font-weight: 300;
          line-height: 20px;
          opacity: 0.75;
        }

        .row__content {
          color: white;
          font-size: 15px;
          line-height: 20px;
          font-weight: 300;
          display: flex;
          flex-direction: column;

          a {
            font-weight: 500;
            font-size: 17px;
            line-height: 20px;

            &.mail {
              font-size: 13px;
              font-weight: 400;
              opacity: 0.75;
            }
          }

        }
      }
    }

  }
  .footer__newssocnetw{
    .news{
      margin-bottom: 50px;
    }
    .news__form{
      display: grid;
      grid-template-columns: 1fr 50px;
      grid-gap: 10px;

      .input{
        height: 50px;
        background-color: transparent;
        border: 1px solid rgba(156, 156, 156, 0.45);
        border-radius: 2px;
        color: white;
        padding: 0 20px;
      }
      .submit__btn{
        border-radius: 2px;
        background-color: white;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        color: black;
      }
    }
    .socnetw{
      .socnetw__items{
        display: flex;
        gap: 28px;
      }
    }
  }
}

@media screen and (max-width: 1300px){
  .footer{
    .footer__top {

      grid-template-columns: 0.4fr 1fr 1.4fr 1.2fr;
    }
  }
}
@media screen and (max-width: 992px){
.footer{
  .footer__header{
    font-size: 15px;
    margin-bottom: 14px;
  }
  .footer__top{
    padding: 40px 0;
    grid-template-columns: 1fr;
    .footer__logo, .footer__nav, .footer__contacts{
      display: none;
    }
    .footer__newssocnetw{
      .news{
        margin-bottom: 20px;
      }
      .socnetw{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .footer__logo-mobile{
          display: block !important;
        }
        .socnetw__wrapper{
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          .footer__header{
            margin-bottom: 0;
          }
          .socnetw__items{
            gap: 17px;
          }
        }
      }
    }
  }
  .footer__bottom{
    .links{
      a.link{
        display: none;
      }
    }
  }
}
}
</style>