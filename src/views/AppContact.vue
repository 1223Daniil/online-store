<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3005";
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
// function adjust_textarea(h) {
//     h.style.height = "20px"
//     h.style.height = (h.scrollHeight)+"px"
// }
export default {
  components: { yandexMap, ymapMarker },
 data(){
  return{
    Name:'',
Email:'',
Tem:'',
Comment:'',
  }
 },
 methods:{
  async ContactData(evt) {
      evt.preventDefault();
      await axios.post("/Contact", {
        Name:this.Name,
        Email:this.Email,
        Tem:this.Tem,
        Comment:this.Comment,
      });
      this.Name = ''
      this.Email = ''
      this.Tem = ''
      this.Comment = ''
    },
 }
}
</script>

<template>
    <div class="container">
    <p class="title"><h1>Контакты</h1></p>
<div class="t"><div><p>Главная - <font color="#727272">Контакты</font></p></div></div>






  <div class="test">
    <giv><span>Телефон</span><span>+7 (495) 823-54-12</span></giv>
    <giv><span>E-mail</span><span>info@sitename.com</span></giv>
    <giv
      ><span>Адрес</span><span>г. Москва, 3-я улица Строителей, 25</span></giv>
  </div>

<h3>Напишите нам</h3>

<form class="form-style-4"  @submit="ContactData">
  <label for="field1">
  <span>Имя</span><input v-model="Name" type="text"  />
  </label>
  <label for="field2">
  <span>E-mail</span><input v-model="Email" type="email"   />
  </label>
  <label for="field3">
 <span>Тема комментария</span><input v-model="Tem" type="text"    /> 
  </label>
  <label for="field4">
  <span>Комментарий</span><textarea v-model="Comment" onkeyup="adjust_textarea(this)" ></textarea>
  </label>
  <label>
  <span> </span><button class="btn btn-primary" type="submit">Отпрвавить</button>
  </label>
</form>
</div>

</template>

<style scoped>
.form-style-4 {
    width: 450px;
    font-size: 16px;
    background: #ffffff;
    padding: 30px 30px 15px 30px;
}
.form-style-4 label {
    display: block;
    margin-bottom: 10px;
}
.form-style-4 input[type=text], .form-style-4 input[type=email] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #83A4C5;
    width: 275px;
    outline: none;
    padding: 0px 0px 0px 0px;
    font-style: italic;
}
.title{
    margin-top: 100px;
}
.t {

  margin-bottom: 100px;
}


.test {
  margin-top: 70px;
  display: flex;
  gap: 111px;
}
span {
  margin-bottom: 19px;
  display: block;
  color: #000000;
  font-size: 17px;
  font-family: Raleway;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.34px;
}
</style>
