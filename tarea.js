const $form = document.querySelector("form");

//Para evitar que el formulario se envíe y recargue la página, podemos usar el evento 'submit' y prevenir su comportamiento por defecto.
$form.addEventListener("submit", function (e) {
  e.preventDefault();
  return false;
});

const edadFueraDelEvento = document.querySelector("#edad").value;
console.log(edadFueraDelEvento);

function manejarClickSaludar() {
  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const edad = document.querySelector("#edad").value;
  const saludo = `Hola ${nombre} ${apellido}, tenés ${edad} años.`;
  document.querySelector("#saludo").textContent = saludo;
}

const $saludar = document.querySelector("#saludar");
$saludar.addEventListener("click", manejarClickSaludar);
