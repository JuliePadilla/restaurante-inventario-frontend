<template>
    <div id="Inventario">
        <h2 style='text-align:center'>MÓDULO DE INVENTARIOS</h2>
        <div style='text-align:left'>
            <left>
                <button v-on:click="init"> Crear </button>
                <button v-on:click="getBalance"> Buscar </button>
                <button> Actualizar </button>
                <button>Eliminar</button>
            </left>
        </div>

        <center>
            <form>
                <label for="idprod">Id producto:</label>
                <input type="text" id="idprod" name="idprod" value="">

                <label for="nomprod">Nombre:</label>
                <input type="text" id="nomprod" name="nomprod" value=""><br><br>

                <label for="precprod">Precio:</label>
                <input type="text" id="precprod" name="precprod" value="">

                <label for="cantprod">Cantidad:</label>
                <input type="text" id="cantprod" name="cantprod" value="">

                <label for="catprod">Categoría:</label>
                <input type="text" id="catprod" name="catprod" value=""><br><br>
            
                <button>Mostrar lista de productos</button><br>
            </form>
        </center>

        <center>
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
        </center>
        
    </div>
</template>

<script>
import axios from "axios";
export default {
                name: "Inventario",
                data: function () {
        return {
            id: "",
            nombre: "",
            precio: 0,
            cantidad: 0,
            categoria: "",
        };
    },

    methods: {
        init: function () {
        if (this.$route.name != "user") {
            let username = input.id.getItem("current_username");
            this.$router.push({ name: "user", params: { username: username }});
        }
        },

        findProducto: function () {
            this.id = document.getElementById("id").value
            let self = this
            axios.get("https://restaurantemintic.herokuapp.com/producto/consulta/" + this.id)
                .then((result) => {
                    self.id = result.data.id
                    self.nombre = result.data.nombre
                    self.precio = result.data.precio
                    self.cantidad = result.data.cantidad
                    self.categoria = result.data.categoria
                    
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

            let self = this
            
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
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });

        }
    },
}
</script>

<style>
#Inventario body {
    margin: 0 0 0 0;
    background-color: #19191a;
    /*background-image: url("./assets/carnep.jpg");*/
    background-size: 100%;
    overflow: hidden;
  }

  #Inventario table, th, td {
    border: 1px solid black;
  }

  #Inventario .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #fcfafa ;
  } 
</style>