function saludar() {
    alert("Bienvenido a la Academia de T.I");
}

function suma() {
    var valor1 = 24;
    var valor2 = 13;
    var resultado = valor1 + valor2;
    alert("Resultado de la suma de " + valor1 + " mas " + valor2 + " es: " + resultado);
}

function resta() {
    var valor1 = 50;
    var valor2 = 25;
    var resultado = valor1 - valor2;
    alert("Resultado de la resta de " + valor1 + " menos " + valor2 + " es: " + resultado);
}

function multiplicacion() {
    var valor1 = 10;
    var valor2 = 10;
    var resultado = valor1 * valor2;
    alert("Resultado de la multiplicacion de " + valor1 + " por " + valor2 + " es: " + resultado);
}

function division() {
    var valor1 = 100;
    var valor2 = 4;
    var resultado = valor1 / valor2;
    alert("Resultado de la division de " + valor1 + " entre " + valor2 + " es: " + resultado);
}

/* ES6 INICIO 1 */
function inicio1() {
    alert("Hola Mundo!");
}

/* ES6 INICIO 2 */
function inicio2() {
    var a = 10;
    var b = 5;
    var resultado = a + b;
    alert("La suma de " + a + " mas " + b + " es: " + resultado);
}

/* ES6 INICIO 3 */
function inicio3() {
    var num1 = 0;
    var num2 = 0;
    num1 = num1 + 1;
    num2 = num2 + 5;
    alert("El primer numero ahora es " + num1);
    alert("El segundo numero ahora es " + num2);
}

/* ES6 INICIO 4 */
function inicio4() {
    var a = "Hola";
    var b = " mundo!";
    document.write("Constante a contiene " + a + "<br>");
    document.write("Variable b contiene " + b + "<br>");
    document.write(a + b);
}

/* ES6 INICIO 5 (corregido) */
function inicio5() {
    var a = 2;
    var b = 8;
    var resultado = a * b;
    document.write("Variable a contiene " + a + "<br>");
    document.write("Variable b contiene " + b + "<br>");
    document.write("El producto de a por b es " + resultado);
}

/* ES6 INICIO 6 */
function inicio6() {
    var dato = prompt("Introduce tu nombre", "");
    document.write("Hola, como estas " + dato);
}

/* ES6 INICIO 7 */
function inicio7() {
    var dato = prompt("Introduce numero", "0");
    var num = parseInt(dato);
    num = num * 2;
    document.write("El doble es " + num);
}

/* ES6 INICIO 8 */
function inicio8() {
    var d1 = prompt("Introduce primer numero", "0");
    var d2 = prompt("Introduce segundo numero", "0");
    var n1 = parseInt(d1);
    var n2 = parseInt(d2);
    var resultado = n1 + n2;
    document.write("La suma es " + resultado);
}

/* ES6 INICIO 9 */
function inicio9() {
    var dato = prompt("Introduce un numero", "0");
    var num = parseInt(dato);
    var resultado = num * 2;
    document.getElementById("salida").innerHTML = "El doble es " + resultado;
}

/* ES6 INICIO 10 */
function inicio10() {
    var n1 = parseInt(prompt("Primer numero", "0"));
    var n2 = parseInt(prompt("Segundo numero", "0"));
    document.write("La resta es " + (n1 - n2));
}

/* ES6 INICIO 11 */
function inicio11() {
    var n1 = parseInt(prompt("Primer numero", "0"));
    var n2 = parseInt(prompt("Segundo numero", "0"));
    document.write("Resta: " + (n1 - n2) + "<br>");
    document.write("Multiplicacion: " + (n1 * n2));
}

/* ES6 INICIO 12 */
function inicio12() {
    var contador = 1;
    var num;
    while (contador < 5) {
        num = parseInt(prompt("Introduce numero del 1 al 10", ""));
        document.write("Numero introducido: " + num + "<br>");
        document.write("Contador: " + contador + "<br>");
        contador = contador + 1;
    }
    document.write("<h2>Fin del programa</h2>");
    document.write("Ultimo numero introducido es " + num);
}

/* ES6 INICIO 13 */
function inicio13() {
    inicio12(); // mismo ejercicio usando var
}

/* ES6 INICIO 14 */
function inicio14() {
    var num;
    do {
        num = parseInt(prompt("Introduce numeros (sale con 7)", ""));
        document.write(num + "<br>");
    } while (num != 7);
}

/* CONDICIONAL 1 */
function condicional1() {
    var n1 = parseInt(prompt("Introduce primer numero", "0"));
    var n2 = parseInt(prompt("Introduce segundo numero", "0"));

    if (n1 > n2) {
        document.write("El mayor es " + n1);
    } else {
        document.write("El mayor es " + n2);
    }
}

/* CONDICIONAL 2 */
function condicional2() {
    var edad = parseInt(prompt("Introduce tu edad", "0"));

    if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}

/* CONDICIONAL 3 */
function condicional3() {
    var nota = parseInt(prompt("Introduce nota", "0"));

    if (nota >= 6) {
        document.write("Aprobado");
    } else {
        document.write("Reprobado");
    }
}

/* CONDICIONAL 4 */
function condicional4() {
    var num = parseInt(prompt("Introduce numero", "0"));

    if (num % 2 == 0) {
        document.write("El numero es par");
    } else {
        document.write("El numero es impar");
    }
}

/* CONDICIONAL 5 */
function condicional5() {
    var n1 = parseInt(prompt("Numero 1", "0"));
    var n2 = parseInt(prompt("Numero 2", "0"));

    if (n1 == n2) {
        document.write("Son iguales");
    } else {
        document.write("Son diferentes");
    }
}

/* CONDICIONAL 6 */
function condicional6() {
    var num = parseInt(prompt("Introduce numero", "0"));

    if (num > 0) {
        document.write("Numero positivo");
    } else if (num < 0) {
        document.write("Numero negativo");
    } else {
        document.write("Numero es cero");
    }
}

/* CONDICIONAL 7 */
function condicional7() {
    var dia = parseInt(prompt("Introduce dia (1-7)", "0"));

    if (dia == 1) document.write("Lunes");
    else if (dia == 2) document.write("Martes");
    else if (dia == 3) document.write("Miercoles");
    else if (dia == 4) document.write("Jueves");
    else if (dia == 5) document.write("Viernes");
    else if (dia == 6) document.write("Sabado");
    else if (dia == 7) document.write("Domingo");
    else document.write("Dia invalido");
}

/* CONDICIONAL 8 */
function condicional8() {
    var letra = prompt("Introduce una letra", "");

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        document.write("Es vocal");
    } else {
        document.write("No es vocal");
    }
}

/* CONDICIONAL 9 */
function condicional9() {
    var cal = parseInt(prompt("Introduce calificacion", "0"));

    if (cal >= 9) document.write("Excelente");
    else if (cal >= 7) document.write("Bueno");
    else if (cal >= 6) document.write("Suficiente");
    else document.write("Insuficiente");
}

/* CONDICIONAL 10 */
function condicional10() {
    var num = parseInt(prompt("Numero", "0"));

    if (num >= 1 && num <= 10) {
        document.write("Numero valido");
    } else {
        document.write("Numero fuera de rango");
    }
}

/* CONDICIONAL 11 */
function condicional11() {
    var pass = prompt("Introduce contraseña", "");

    if (pass == "admin") {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    }
}

/* CONDICIONAL 12 */
function condicional12() {
    var num = parseInt(prompt("Introduce numero", "0"));

    if (num % 3 == 0 && num % 5 == 0) {
        document.write("Multiplo de 3 y 5");
    } else {
        document.write("No es multiplo de 3 y 5");
    }
}

/* CONDICIONAL 13 */
function condicional13() {
    var a = parseInt(prompt("A", "0"));
    var b = parseInt(prompt("B", "0"));
    var c = parseInt(prompt("C", "0"));

    if (a > b && a > c) document.write("A es mayor");
    else if (b > a && b > c) document.write("B es mayor");
    else document.write("C es mayor");
}

/* CONDICIONAL 14 */
function condicional14() {
    var num = parseInt(prompt("Numero", "0"));

    if (num % 2 == 0 && num > 0) {
        document.write("Par positivo");
    } else {
        document.write("No cumple");
    }
}

/* CONDICIONAL 15 */
function condicional15() {
    var temp = parseInt(prompt("Temperatura", "0"));

    if (temp < 10) document.write("Frio");
    else if (temp < 25) document.write("Templado");
    else document.write("Calor");
}

/* FUNCIONES 1 */
function funcion1() {
    alert("Hola desde una funcion");
}

/* FUNCIONES 2 */
function funcion2() {
    var n1 = 5;
    var n2 = 3;
    alert("La suma es " + (n1 + n2));
}

/* FUNCIONES 3 */
function funcion3() {
    var num = parseInt(prompt("Introduce numero", "0"));
    return num * 2;
}

/* FUNCIONES 4 */
function funcion4() {
    var resultado = funcion3();
    alert("El doble es " + resultado);
}

/* FUNCIONES 5 */
function funcion5() {
    var a = 10;
    var b = 2;
    alert("La resta es " + (a - b));
}

/* FUNCIONES 6 */
function funcion6(nombre) {
    document.write("Hola " + nombre);
}

/* FUNCIONES 7 */
function funcion7() {
    funcion6("Juan");
}

/* FUNCIONES 8 */
function funcion8(a, b) {
    return a + b;
}

/* FUNCIONES 9 */
function funcion9() {
    var r = funcion8(4, 6);
    alert("Resultado: " + r);
}

/* FUNCIONES 10 */
function funcion10(num) {
    if (num % 2 == 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

/* FUNCIONES 11 */
function funcion11() {
    var num = parseInt(prompt("Numero", "0"));
    alert(funcion10(num));
}

/* FUNCIONES 12 */
function funcion12() {
    var edad = parseInt(prompt("Edad", "0"));

    if (edad >= 18) {
        return "Mayor de edad";
    } else {
        return "Menor de edad";
    }
}

/* FORMULARIO 1 */
function form1() {
    var nombre = document.getElementById("nombre").value;
    alert("Nombre ingresado: " + nombre);
}

/* FORMULARIO 2 */
function form2() {
    var edad = document.getElementById("edad").value;
    alert("Edad ingresada: " + edad);
}

/* FORMULARIO 3 */
function form3() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    alert("Suma: " + (n1 + n2));
}

/* FORMULARIO 4 */
function form4() {
    var texto = document.getElementById("texto").value;
    document.write("Texto escrito: " + texto);
}

/* FORMULARIO 5 */
function form5() {
    var correo = document.getElementById("correo").value;
    alert("Correo: " + correo);
}

/* FORMULARIO 6 */
function form6() {
    var pass = document.getElementById("pass").value;
    if (pass == "1234") {
        alert("Contraseña correcta");
    } else {
        alert("Contraseña incorrecta");
    }
}

/* FORMULARIO 7 */
function form7() {
    var num = document.getElementById("numero").value;
    if (num % 2 == 0) {
        alert("Numero par");
    } else {
        alert("Numero impar");
    }
}

/* FORMULARIO 8 */
function form8() {
    var nom = document.getElementById("nom").value;
    var ape = document.getElementById("ape").value;
    alert("Nombre completo: " + nom + " " + ape);
}

/* FORMULARIO 9 */
function form9() {
    var precio = parseFloat(document.getElementById("precio").value);
    var iva = precio * 0.16;
    alert("IVA: " + iva);
}

/* FORMULARIO 10 */
function form10() {
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);
    alert("Area: " + (base * altura));
}

/* FORMULARIO 11 */
function form11() {
    var radio = parseInt(document.getElementById("radio").value);
    var area = 3.1416 * radio * radio;
    alert("Area del circulo: " + area);
}

/* FORMULARIO 12 */
function form12() {
    var c = parseInt(document.getElementById("celsius").value);
    var f = (c * 9 / 5) + 32;
    alert("Fahrenheit: " + f);
}

/* FORMULARIO 13 */
function form13() {
    var n1 = parseInt(document.getElementById("a").value);
    var n2 = parseInt(document.getElementById("b").value);

    if (n1 > n2) {
        alert("Mayor es: " + n1);
    } else {
        alert("Mayor es: " + n2);
    }
}
