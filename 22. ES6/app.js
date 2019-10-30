//PREGUNTA 1

//PROMEDIOS

// let Jose = [7, 8, 9];
// let Renata = [5, 9, 3];
// let Pedro = [4, 8, 6];

// //promedio Jose
// let resultadoJose = Jose.reduce((a, b) => a + b);

// let promedioJose = resultadoJose / Jose.length;
// console.log(promedioJose);

// //promedio Renata
// let resultadoRenata = Renata.reduce((a, b) => a + b);

// let promedioRenata = resultadoRenata / Renata.length;
// console.log(promedioRenata);

// //promedio Pedro
// let resultadoPedro = Pedro.reduce((a, b) => a + b);

// let promedioPedro = resultadoPedro / Pedro.length;
// console.log(promedioPedro);

// //MEJOR NOTA

// const estudiantes = [
//   { nombre: "Jose", notas: [7, 8, 9] },
//   { nombre: "Renata", notas: [5, 9, 3] },
//   { nombre: "Pedro", notas: [4, 8, 6] }
// ];

// //sacar la mejor nota

// const nuevoArreglo = estudiantes.map(function(resultado) {
//   return resultado * 1;
// });
// console.log(nuevoArreglo);

// const resultado = estudiantes.filter(estudiantes.notas);

// let imprimir = console.log(estudiantes.reduce(mejorNota, 0));
// //sacar la mejor nota

// const nuevoArreglo = estudiantes.map(function(resultado) {
//   return resultado * 1;
// });
// console.log(nuevoArreglo);

// const resultado = estudiantes.filter(estudiantes.notas);

//PREGUNTA 2

//Punto A
//Factory

// function human(nombre, apellido, edad, genero, nacionalidad) {
//   return {
//     objetoNombre: nombre,
//     objetoApellido: apellido,
//     objetoEdad: edad,
//     objetoGenero: genero,
//     objetoNacionalidad: nacionalidad,

//     saludar: function() {
//       console.log(`Hola soy ${nombre}`);
//     }
//   };
// }

// let Amelia = human("Amelia", "Rodriguez", 23, "Femenino", "Colombiana");
// Amelia.saludar();

//Constructor

// function Human(nombre, apellido, edad, genero, nacionalidad) {
//   {
//     this.objetoNombre = nombre;
//     this.objetoApellido = apellido;
//     this.objetoEdad = edad;
//     this.objetoGenero = genero;
//     this.objetoNacionalidad = nacionalidad;

//     this.saludar = function() {
//       console.log("Hola soy " + this.objetoNombre);
//     };
//   }
// }

// Amelia = new Human("Amelia", "Rodriguez", 23, "Femenino", "Colombiana");
// Amelia.saludar();

//Punto B
//Factory

// function pelicula(nombre, lanzamiento, productor, duracion) {
//   return {
//     objetoNombre: nombre,
//     objetoLanzamiento: lanzamiento,
//     objetoProductor: productor,
//     objetoDuracion: duracion,

//     nombrePelicula: function() {
//       console.log(`${nombre} : ${lanzamiento}`);
//     }
//   };
// }

// let peliculaNombre = pelicula("Titanic", "2004");
// peliculaNombre.nombrePelicula();

//Constructor

// function Pelicula(nombre, lanzamiento, productor, duracion) {
//   {
//     this.objetoNombre = nombre;
//     this.objetoLanzamiento = lanzamiento;
//     this.objetoProductor = productor;
//     this.objetoDuracion = duracion;

//     this.nombrePelicula = function() {
//       console.log(`${this.objetoNombre} : ${this.objetoLanzamiento}`);
//     };
//   }
// }

// let peliculaNombre = new Pelicula("Titanic", "2004");
// peliculaNombre.nombrePelicula();

//Punto C
//Factory

// function presidente(
//   nombre,
//   inicioMandato,
//   finMandato,
//   edad,
//   fueBueno,
//   fraseCelebre
// ) {
//   return {
//     objetoNombre: nombre,
//     objetoInicioMandato: inicioMandato,
//     objetoFinMandato: finMandato,
//     objetoEdad: edad,
//     objetoFueBueno: fueBueno,
//     objetoFrase: fraseCelebre,

//     saludoPresidente: function() {
//       console.log(`${nombre} : ${fraseCelebre}`);
//     }
//   };
// }

// let presidenteNuevo = presidente(
//   "Juan Manuel Santos",
//   "",
//   "",
//   "",
//   "",
//   "la paz"
// );
// presidenteNuevo.saludoPresidente();

//Constructor

// function Presidente(
//   nombre,
//   inicioMandato,
//   finMandato,
//   edad,
//   fueBueno,
//   fraseCelebre
// ) {
//   this.objetoNombre = nombre;
//   this.objetoInicioMandato = inicioMandato;
//   this.objetoFinMandato = finMandato;
//   this.objetoEdad = edad;
//   this.objetoFueBueno = fueBueno;
//   this.objetoFrase = fraseCelebre;

//   this.saludoPresidente = function() {
//     console.log(`${this.objetoNombre} : ${this.objetoFrase}`);
//   };
// }

// presidenteNuevo = new Presidente(
//   "Juan Manuel Santos",
//   "",
//   "",
//   "",
//   "",
//   "la paz"
// );

// presidenteNuevo.saludoPresidente();

//TERCER PUNTO

//A:

// let numeroUsuario = prompt("Ingrese un número");

// let signoNumero =
//   numeroUsuario >= 0
//     ? alert("El número es positivo")
//     : alert("El número es negativo");

// signoNumero();

//B:

// let parNumero =
//   numeroUsuario % 2 == 0
//     ? alert("El número es par")
//     : alert("El número es impar");

// parNumero();

// //CUARTO PUNTO

// let usuario = {
//   nombre: "Jose",
//   apellido: "Perez",
//   correo: "jose@perez.com",
//   oontrasena: "123abc"
// };

// console.log(correo + "" + contrasena);

// / //PUNTO 4

// let usuario ={
//     nombre:"Jose",
//     apellido: "Perez",
//     correo: "jose@perez.com",
//     contrasena: "123abc",
// }

// const {correo ,contrasena} =usuario;
// console.log(correo + " " +contrasena)

//PUNTO 5

// //punto a
// const a =["azucar", "agua"];
// const b =["pulpa", "hielo", "vaso"];
// const ingredientes =[...a, ...b];
// console.log(ingredientes);

// //punto b
// function prepararJugo(...ingredientes){
//     console.log("Los ingredientes usados fueron: "+ ingredientes)
// }
// prepararJugo(...ingredientes);

// //PUNTO 6
// function max(...ingredientes){
//     if(ingredientes.length>=5){
//         console.log("el máximo es:" + max);
//     }
// }
// max()

//PUNTO 7
var personas=[Paola, Marcela, Pablo, George, Antonia];
var sillas=[A7, B4, G6, H4, L10];
