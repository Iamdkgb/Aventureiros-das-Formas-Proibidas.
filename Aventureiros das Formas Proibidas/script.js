document.addEventListener("DOMContentLoaded", function() {
    // Código para a página triangulo.html
    var formularioTriangulo = document.getElementById("formulario-triangulo");
    var resultadoDivTriangulo = document.getElementById("resultado-triangulo");

    formularioTriangulo.addEventListener("submit", function(event) {
        event.preventDefault();

        var base = parseFloat(document.getElementById("base-triangulo").value);
        var altura = parseFloat(document.getElementById("altura-triangulo").value);

        if (!isNaN(base) && !isNaN(altura)) {
            var area = (base * altura) / 2;
            resultadoDivTriangulo.innerHTML = "A área do triângulo é: " + area.toFixed(2);
        } else {
            resultadoDivTriangulo.innerHTML = "Por favor, insira valores válidos para a base e a altura.";
        }
    });

    // Código para a página retangulo.html
    var formularioRetangulo = document.getElementById("formulario-retangulo");
    var resultadoDivRetangulo = document.getElementById("resultado-retangulo");

    formularioRetangulo.addEventListener("submit", function(event) {
        event.preventDefault();

        var base = parseFloat(document.getElementById("base-retangulo").value);
        var altura = parseFloat(document.getElementById("altura-retangulo").value);

        if (!isNaN(base) && !isNaN(altura)) {
            var area = base * altura;
            resultadoDivRetangulo.innerHTML = "A área do retângulo é: " + area.toFixed(2);
        } else {
            resultadoDivRetangulo.innerHTML = "Por favor, insira valores válidos para a base e a altura.";
        }
    });

    // Código para a página circulo.html
    var formularioCirculo = document.getElementById("formulario-circulo");
    var resultadoDivCirculo = document.getElementById("resultado-circulo");

    formularioCirculo.addEventListener("submit", function(event) {
        event.preventDefault();

        var raio = parseFloat(document.getElementById("raio-circulo").value);

        if (!isNaN(raio)) {
            var area = Math.PI * raio * raio;
            resultadoDivCirculo.innerHTML = "A área do círculo é: " + area.toFixed(2);
        } else {
            resultadoDivCirculo.innerHTML = "Por favor, insira um valor válido para o raio.";
        }
    });
});
