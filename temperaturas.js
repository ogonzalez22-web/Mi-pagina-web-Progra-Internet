function convertir() {
    // 1. Obtener la temperatura ingresada
    let tempInput = document.getElementById("temperatura").value;
    
    // 2. Identificar el tipo de conversión seleccionado
    let tipoConversion = document.getElementById("opcion").value;

    // 4. Validación: Verificar si el campo está vacío
    if (tempInput.trim() === "") {
        alert("Verifica, el campo de temperatura está vacío");
        return;
    }

    let temp = parseFloat(tempInput);
    let resultado = 0;
    let unidad = "";

    // 3. Realizar la operación correspondiente
    if (tipoConversion === "c_to_f") {
        // Celsius a Fahrenheit: (Celsius × 9 / 5) + 32
        resultado = (temp * 9 / 5) + 32;
        unidad = "°F";
    } else if (tipoConversion === "f_to_c") {
        // Fahrenheit a Celsius: (Fahrenheit - 32) × 5 / 9
        resultado = (temp - 32) * 5 / 9;
        unidad = "°C";
    }

    // 5. Presentación del resultado en la página web
    document.getElementById("mostrar_resultado").textContent = "Resultado: " + resultado + " " + unidad;
}