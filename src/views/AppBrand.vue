<script>
// Компоненты

// Главная страница
export default {};
</script>

<template>
  <div class="Title">
    <div class="SubTitle">О бренде</div>
    <div class="path">Главная - <span class="pathActive">О бренде</span></div>
  </div>
  <div class="IdeaAndWoman">
    <div class="IdeaImage">
      <img src="../assets/sonnie-hiles-gG70fyu3qsg-unsplash 1.png" />
    </div>
    <div class="containerTitle">
      <div class="TitleIdea">Идея и женщина</div>
      <div class="descriptionIdea">
        Womazing была основана в 2010-ом и стала одной из самых успешных
        компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся
        семейной компанией, хотя ни один из членов семьи не является
        модельером.<br /><br />
        Мы действуем по успешной формуле, прибегая к услугам известных
        модельеров для создания своих коллекций. Этот метод был описан критиком
        моды Колином Макдауэллом как форма дизайнерского со-творчества,
        характерная для ряда итальянских prêt-a-porter компаний.
      </div>
    </div>
  </div>
  <div class="IdeaAndWoman magicDetalis">
    <div class="IdeaImage Two">
      <img src="../assets/gbarkz-vqKnuG8GaQc-unsplash 1.png" />
    </div>
    <div class="containerTitle">
      <div class="TitleIdea">Магия в деталях</div>
      <div class="descriptionIdea">
        Первый магазин Womazing был открыт в маленьком городке на севере страны
        в 2010-ом году. Первая коллекция состояла из двух пальто и костюма,
        которые были копиями парижских моделей.<br />
        <br />Несмотря на то, что по образованию основательница была адвокатом,
        ее семья всегда была тесно связана с шитьём (прабабушка основательницы
        шила одежду для женщин, а мать основала профессиональную школу кроя и
        шитья). Стремление производить одежду для масс несло в себе большие
        перспективы, особенно в то время, когда высокая мода по-прежнему
        доминировала, а рынка качественного prêt-a-porter попросту не
        существовало.
      </div>
    </div>
  </div>
  <div class="containerInShop">
    <button class="inShop">Перейти в магазин</button>
  </div>
</template>

<style>
.containerInShop {
  text-align: center;
}
.inShop {
  padding: 22px 50px;
  align-items: center;
  background: var(--cta, #6e9c9f);
  color: #ffffff;
  border: none;
}

.magicDetalis {
  flex-direction: row-reverse;
}
.containerTitle {
  width: 600px;
}
.descriptionIdea {
  color: #000;
  font-size: 17px;
  font-family: Raleway;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.34px;
  margin-right: 29px;
}
.TitleIdea {
  margin-bottom: 46px;
  color: #000;
  /* Заголовок h3 */
  font-size: 25px;
  font-family: Raleway;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.5px;
}
.Title {
  margin-top: 190px;
}
.SubTitle {
  color: #000;

  font-size: 55px;
  font-family: "Raleway";
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 1.1px;
  margin-bottom: 26px;
}
.path {
  color: #000;
  font-size: 17px;
  font-family: "Raleway";
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.34px;
  margin-bottom: 214px;
}
.pathActive {
  color: #909090;
}
.IdeaAndWoman {
  display: flex;
  justify-content: space-between;
  gap: 94px;
  align-items: center;
  margin-bottom: 130px;
}
</style>
