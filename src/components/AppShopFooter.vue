<template>
  <footer>
    <div class="bg">
      <div class="block container">
        <div class="block__wrap">
          <div class="footer_block__links">
            <div class="footer_logo">
              <img class="footer_logo_img" src="../assets/dress.svg" />
              <h4 class="footer_logo__title">WOMAZING</h4>
            </div>

            <div class="footer_menu">
              <a class="footer_menu__item" href="#">Главная</a>
              <a class="footer_menu__item" href="#">Магазин</a>
              <a class="footer_menu__item" href="#">О бренде</a>
              <a class="footer_menu__item" href="#">Контакты</a>
            </div>

            <div class="footer_contacts">
              <a href="#" class="footer_contacts__item">+7 495-823-54-12</a>
              <a href="#" class="footer_contacts__item">hello@womazing.com</a>
            </div>
          </div>

          <div class="footer_block__socials">
            <div class="footer_privacy__policy">
              <a class="footer_privacy__item" href="#">© Все права защищены</a>
              <a class="footer_privacy__item" href="#"
                >Политика конфиденциальности</a
              >
              <a class="footer_privacy__item" href="#">Публичная оферта</a>
            </div>

            <div class="footer__links">
              <a class="footer__link">Пальто</a>
              <a class="footer__link">Свитшоты</a>
              <a class="footer__link">Кардиганы</a>
              <a class="footer__link">Толстовки</a>
            </div>

            <div class="footer__socials">
              <img src="../assets/instagram.svg" width="20px" alt="" />
              <img src="../assets/facebook.svg" width="20px" alt="" />
              <img src="../assets/twitter.svg" width="20px" alt="" />
            </div>

            <img src="../assets/visa-mastercard.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bg {
  background: #f1eadc;
  right: 0%;
  left: 0%;
  bottom: 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  position: relative;
}
@font-face {
  font-family: "Raleway";
  src: url(../assets/Raleway.ttf);
}

footer {
  margin-top: 130px;
  background-color: #f1eadc;
  height: 363px;
}
.block {
}

.block__wrap {
  display: grid;
  row-gap: 40px;
  padding: 101px 245px;
}

.footer_block__links {
  display: flex;
  justify-content: space-between;
}

.footer_logo {
  display: flex;
  gap: 11px;
}

.footer_logo__img {
  width: 25px;
  height: 25px;
}

.footer_logo__title {
  color: #000;
  font-size: 16px;
  font-family: Raleway;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}

.footer_menu {
  display: flex;
  align-items: center;
  gap: 45px;
}

.footer_menu__item {
  color: #000;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: 0.3px;
  text-decoration: none;
}

.footer_contacts {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.footer_contacts__item {
  color: #000;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: 0.3px;
  text-decoration: none;
}

.footer_contacts__item:hover {
  color: rgb(48, 168, 168);
  transition: all ease-in-out 0.5s;
}

.footer_menu__item:nth-child(1) {
  color: #6e9c9f;
}
.footer_block__socials {
  display: flex;
  justify-content: space-between;
}

.footer_privacy__policy {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer_privacy__item {
  color: #000;
  text-decoration: none;
}

.footer__links {
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
}

.footer__link {
  color: #000;
  font-size: 13px;
  line-height: 140%;
  letter-spacing: 0.26px;
  text-decoration: none;
}
</style>

<script></script>
