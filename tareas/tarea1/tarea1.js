//Para evitar que el formulario se envíe y recargue la página, podemos usar el evento 'submit' y prevenir su comportamiento por defecto.
const $formDistancia = document.querySelector("#form-distancia");
$formDistancia.addEventListener("submit", function (e) {
  e.preventDefault();
  return false;
});

const $formVelocidad = document.querySelector("#form-velocidad");
$formVelocidad.addEventListener("submit", function (e) {
  e.preventDefault();
  return false;
});

const $calcularPromedioDistancia = document.querySelector(
  "#calcular-promedio-distancia"
);

const $calcularPromedioVelocidad = document.querySelector(
  "#calcular-promedio-velocidad"
);

function calcularPromedio(números) {
  let acumulador = 0;
  for (let i = 0; i < números.length; i++) {
    acumulador += números[i];
  }
  return acumulador / números.length;
}

$calcularPromedioDistancia.addEventListener("click", function () {
  const $distancia = document.querySelectorAll(".distancia");

  let distancia = [];

  for (let i = 0; i < $distancia.length; i++) {
    distancia.push(parseFloat($distancia[i].value));
  }

  const promedio = calcularPromedio(distancia);
  document.querySelector("#promedio-distancia").innerHTML =
    "El promedio de distancia es: " + Math.ceil(promedio);
});

$calcularPromedioVelocidad.addEventListener("click", function () {
  const $velocidad = document.querySelectorAll(".velocidad");

  let velocidad = [];

  for (let i = 0; i < $velocidad.length; i++) {
    velocidad.push(parseFloat($velocidad[i].value));
  }

  const promedio = calcularPromedio(velocidad);
  document.querySelector("#promedio-velocidad").innerHTML =
    "El promedio de velocidad es: " + Math.ceil(promedio);
});
