let arreglo_curp = [
    {
    primerNombre: "Luis",
    segundoNombre: "Alberto",
    apellidoPaterno: "Mendoza",
    apellidoMaterno: "López",
    diaNacimiento: 3,
    mesNacimiento: 4,
    añoNacimiento: 1991,
    estadoNacimiento: "Cdmx",
    genero: "masculino",
    homoclave: "02",
}];

let curp_cadena = arreglo_curp[0];


const primeras2Letras = curp_cadena.apellidoPaterno.slice(0,2).toUpperCase();
const terceraLetra = curp_cadena.apellidoMaterno.charAt(0).toUpperCase();
const cuartaLetra = curp_cadena.primerNombre.charAt(0).toUpperCase();
const cuartaPosicion = curp_cadena.añoNacimiento.toString().slice(2);
const quintaPosicion = curp_cadena.mesNacimiento.toString().slice(0);
const sextaPosicion = curp_cadena.diaNacimiento.toString().slice(0);
const septimaPosicion = curp_cadena.genero === "masculino" ? "H" : "M";
const octavaPosicion = curp_cadena.estadoNacimiento === "Cdmx" ? "DF" : "00";
const novenaPosicion = curp_cadena.apellidoPaterno.charAt(2).toUpperCase();
const decimaPosicion = curp_cadena.apellidoMaterno.charAt(2).toUpperCase();
const onceavaPosicion = curp_cadena.homoclave


console.log(`${primeras2Letras}${terceraLetra}${cuartaLetra}${cuartaPosicion}0${quintaPosicion}0${sextaPosicion}${septimaPosicion}${octavaPosicion}${novenaPosicion}${decimaPosicion}${onceavaPosicion}`);


