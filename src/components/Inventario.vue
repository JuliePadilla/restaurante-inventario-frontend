<template>
    <div id="Cliente">
        <h2 style='text-align:center'>MÓDULO DE INVENTARIOS</h2>
        <h2 id="11" value=""></h2>
        <center>
      <h2>Módulo de inventario</h2>
     <div style='text-align:left'>
      <left>
        <button v-on:click="init" v-if="is_auth" > Crear </button>
        <button v-on:click="getBalance" v-if="is_auth" > Buscar </button>
        <button v-if="is_auth" > Actualizar </button>
        <button v-if="is_auth" >Eliminar</button>
        <button v-if="is_auth" >Salir</button><br>
      </left>
    </div style='text-align:left'>
     
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
 
      <input type="submit" value="Mostrar Lista de productos">
    </form>
    <br>
    <div>
    <table style="width:100%">
  <tr>
    <th>Id</th>
    <th>Nombre</th>
    <th>Precio</th>
    <th>Cantidad</th>
    <th>Categoría</th>
  </tr>
  <tr>
    <td>CA01</td>
    <td>Carne asada</td>
    <td>17000</td>
    <td>15</td>
    <td>Carnes</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

</template>

<script>

import axios from "axios";
export default {
    name: "Cliente",
    data: function () {
        return {
            telefono: 0,
            nombre: "",
            direccion: "",
            barrio: "",
            cedula: 0,
            cumpleanos: "",
            balance: 0,
        };
    },

    methods: {
        init: function () {
        if (this.$route.name != "user") {
            let username = input.Phone.getItem("current_username");
            this.$router.push({ name: "user", params: { username: username } });
        }
        },

        findCliente: function () {
            this.telefono = document.getElementById("Phone").value
            let self = this
            axios.get("https://restaurante-back-g1.herokuapp.com/cliente/consulta/" + this.telefono)
                .then((result) => {
                    self.telefono = result.data.telefono
                    self.nombre = result.data.nombre
                    self.direccion = result.data.direccion
                    self.barrio = result.data.barrio
                    self.cedula = result.data.cedula
                    self.cumpleanos = result.data.cumpleanos
                    document.getElementById("Phone").value = self.telefono;
                    document.getElementById("name").value = self.nombre;
                    document.getElementById("adress").value = self.direccion
                    document.getElementById("zone").value = self.barrio
                    document.getElementById("idCC").value = self.cedula
                    document.getElementById("birth").value = self.cumpleanos
                    document.getElementById("11").value = "Se encontro usuario" + self.nombre
                    
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });

        },
        makeCliente: function () {
            this.telefono = document.getElementById("Phone").value
            this.nombre = document.getElementById("name").value
            this.direccion = document.getElementById("adress").value
            this.barrio = document.getElementById("zone").value
            this.cedula = document.getElementById("idCC").value
            this.cumpleanos = document.getElementById("birth").value

            /*newCliente = {
                            "telefono": parseInt(this.telefono, 10),
                            "nombre": this.nombre,
                            "direccion": this.direccion,
                            "barrio": this.barrio,
                            "cedula": this.cedula,
                            "cumpleanos": this.cumpleanos
            };*/    

            let self = this
            //const res = await axios.post('https://httpbin.org/post', { answer: 42 });
            
            axios.post("https://restaurante-back-g1.herokuapp.com/cliente/crear/", {
                            "telefono": parseInt(this.telefono, 10),
                            "nombre": this.nombre,
                            "direccion": this.direccion,
                            "barrio": this.barrio,
                            "cedula": this.cedula,
                            "cumpleanos": this.cumpleanos
            })
                .then((result) => {
                    alert("Cliente Creado");
                    /*
                    self.telefono = result.data.telefono
                    self.nombre = result.data.nombre
                    self.direccion = result.data.direccion
                    self.barrio = result.data.barrio
                    self.cedula = result.data.cedula
                    self.cumpleanos = result.data.cumpleanos
                    document.getElementById("Phone").value = self.telefono;
                    document.getElementById("name").value = self.nombre;
                    document.getElementById("adress").value = self.direccion
                    document.getElementById("zone").value = self.barrio
                    document.getElementById("idCC").value = self.cedula
                    document.getElementById("birth").value = self.cumpleanos
                    document.getElementById("11").value = "Se encontro usuario" + self.nombre
                    */
                    
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });

        }
    },
    /*created: function() {

            this.username = this.$route.params.username

            let self = this
            axios.get("https://cajero-api2.herokuapp.com/user/balance/" + this.username)
                .then((result) => {
                    self.balance = result.data.balance
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });
        }*/

    

};

</script>

<style>
#UserBalance {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#UserBalance h2 {
    font-size: 50px;
    color: #283747;
}
#UserBalance span {
    color: crimson;
    font-weight: bold;
}
button{
    color: #000000;
    background: #f5a018;
    border: 1px solid #007efc;
    border-radius: 5px;
    padding: 10px 20px;
}
button:hover{
    color: #000000;
    background: #7fbfff;
    border: 1px solid #358035;
}
</style>