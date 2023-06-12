function calcularDescuento() {
    var cantidad = document.getElementById("cantidad").value;
    var opcion = document.getElementById("opcion").value;
    var totalPagar = 0;

    if (cantidad > 0 && opcion !== "-Elegí una opción-") {
      var descuento = 0;

      if (opcion === "1") { // Estudiante
        descuento = 0.8; // 80% de descuento
      } else if (opcion === "2") { // Trainee
        descuento = 0.5; // 50% de descuento
      } else if (opcion === "3") { // Junior
        descuento = 0.15; // 15% de descuento
      }

      totalPagar = cantidad * 200 * (1 - descuento);
    }

    document.getElementById("totalPagar").textContent = totalPagar.toFixed(2);
  }

  function borrar() {
    document.getElementById("cantidad").value = "";
    document.getElementById("opcion").selectedIndex = 0;
    document.getElementById("totalPagar").textContent = "0";
  }

