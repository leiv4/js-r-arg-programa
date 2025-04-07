const $form = document.querySelector("form");

//Para evitar que el formulario se envíe y recargue la página, podemos usar el evento 'submit' y prevenir su comportamiento por defecto.
$form.addEventListener("submit", function (e) {
  e.preventDefault();
  return false;
});

function promedio() {
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;
  const num3 = document.querySelector("#num3").value;

  return (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
}

function clickCalcular() {
  const mensajePromedio = promedio();
  const calcular = `El promedio es:  ${mensajePromedio}`;
  document.querySelector("#promedio").textContent = calcular;
}

const $calcular = document.querySelector("#calcular");
$calcular.addEventListener("click", clickCalcular);
