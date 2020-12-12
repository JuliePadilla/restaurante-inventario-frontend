<template>
  <div id="app">
    <div class="header">
      <h1>Carbón de Leña</h1>
      <h2>Módulo de Inventario</h2>
      <nav>
        <!--<button v-on:click="init" v-if="is_auth" > Inicio </button>
        <button v-on:click="getBalance" v-if="is_auth" > Cliente </button>
        <button v-if="is_auth" > Inventario </button>
        <button v-if="is_auth" >Ventas</button>-->
      </nav>
    </div>
    <div class="main-component">
      <!--<router-view></router-view>-->

      <!--<img src="./assets/lena1.jpg" alt="fondo">-->
     <div>
      <right>
        <button v-on:click="init" v-if="is_auth" > Crear </button>
        <button v-on:click="getBalance" v-if="is_auth" > Buscar </button>
        <button v-if="is_auth" > Actualizar </button>
        <button v-if="is_auth" >Eliminar</button>
        <button v-if="is_auth" >Salir</button><br>
      </right>
    </div>
     <center>
     <form action="/action_page.php">
      <label for="idprod">Id producto:</label>
      <input type="text" id="idprod" name="idprod" value="">
      <label for="nomprod">Nombre:</label>
      <input type="text" id="nomprod" name="nomprod" value=""><br><br>
      <label for="precprod">precio:</label>
      <input type="text" id="precprod" name="precprod" value="">
      <label for="cantprod">cantidad:</label>
      <input type="text" id="cantprod" name="cantprod" value="">
      <label for="catprod">categoría:</label>
      <input type="text" id="catprod" name="catprod" value=""><br><br>

      <input type="submit" value="Guardar">
      <input type="submit" value="Mostrar Lista">
    </form>
  </center>
    </div>
    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>

<script>
export default {
name: 'App',
components: {},
data: function(){
return {
is_auth: localStorage.getItem('isAuth') || false
}
},
methods: {
init: function(){
if(this.$route.name != "user"){
let username = localStorage.getItem("current_username")
this.$router.push({name: "user", params:{username:username}})
}
},
getBalance: function(){
if(this.$route.name != "user_balance"){
let username = localStorage.getItem("current_username")
this.$router.push({ name:"user_balance",
params:{username:username}
})
}
},
},
beforeCreate: function(){
  localStorage.setItem('current_username', 'camilo24')
  localStorage.setItem('isAuth', true)

  this.$router.push({name:"user",params:{username:'camilo24'}})
}
}
</script>

<style>
body{
margin: 0 0 0 0;
}
.header{
margin: 0%;
padding: 0;
width: 100%;
height: 10vh;
min-height: 100px;
background-color: #d6b629 ;
color:#E5E7E9 ;
display: flex;
justify-content: center;
align-items: center;
}
/*.header h1{
width: 100%;
text-align: center;
}
.header nav {
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
}
.header nav button{
color: #E5E7E9;
background: #283747;
border: 1px solid #E5E7E9;
border-radius: 5px;
padding: 10px 20px;
}
.header nav button:hover{
color: #283747;
background: #E5E7E9;
border: 1px solid #E5E7E9;
}*/
.main-component{
height: 75vh;
margin: 0%;
padding: 0%;
background: #fcfafa ;
} 

.footer{
margin: 0;
padding: 0;
width: 100%;
height: 10vh;
min-height: 100px;
background-color: #d6b629;
color: #E5E7E9;
}
.footer h2{
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
}
</style>
