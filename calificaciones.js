function calcularPromedio() {
    // 1. Obtener los valores ingresados
    let nombre = document.getElementById("nombre").value;
    let cal1Input = document.getElementById("cal1").value;
    let cal2Input = document.getElementById("cal2").value;
    let cal3Input = document.getElementById("cal3").value;

    // 2. Validación A: Verificar que el nombre no esté vacío
    if (nombre.trim() === "") {
        alert("Verifica, el nombre del estudiante está vacío");
        return;
    }

    // Validación B: Verificar que las tres calificaciones tengan un valor
    if (cal1Input.trim() === "" || cal2Input.trim() === "" || cal3Input.trim() === "") {
        alert("Verifica, debes ingresar las tres calificaciones");
        return;
    }

    // Convertir los textos a números decimales
    let cal1 = parseFloat(cal1Input);
    let cal2 = parseFloat(cal2Input);
    let cal3 = parseFloat(cal3Input);

    // Validación C: Verificar que sean números válidos
    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        alert("Verifica, las calificaciones deben ser números válidos");
        return;
    }

    // Validación D: Verificar que ninguna calificación sea menor a 0 ni mayor a 10
    if (cal1 < 0 || cal1 > 10 || cal2 < 0 || cal2 > 10 || cal3 < 0 || cal3 > 10) {
        alert("Verifica, las calificaciones deben estar entre 0 y 10");
        return;
    }

    // 3. Calcular el promedio
    let promedio = (cal1 + cal2 + cal3) / 3;

    // 4. Determinar el estado (APROBADO o REPROBADO)
    let estado = "";
    if (promedio >= 6 && promedio <= 10) {
        estado = "APROBADO";
    } else {
        estado = "REPROBADO";
    }

    // 5. Determinar la observación según el promedio
    let observacion = "";
    if (promedio >= 9) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    // 6. Presentación de los resultados en la página web
    document.getElementById("mostrar_resultado").innerHTML = 
        "<strong>Resultados del estudiante:</strong><br>" +
        "Nombre: " + nombre + "<br>" +
        "Calificaciones: " + cal1 + ", " + cal2 + ", " + cal3 + "<br>" +
        "Promedio: " + promedio.toFixed(1) + "<br>" +
        "Estado: " + estado + "<br>" +
        "Observación: " + observacion;
}