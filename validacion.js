function validacion(form){
            let dni = form.dni.value.trim();
            let letra = form.letra.value.trim().toUpperCase();

            
            if (dni === "") {
                alert("Por favor, ingrese un DNI");
                return false;
            }
            if (isNaN(dni) || dni <= 0 || dni.toString().length !== 8 || dni > 99999999) {
                alert("DNI no válido");
                return false;
            }

            
            if (letra === "") {
                alert("Por favor, ingrese una letra");
                return false;
            }
            const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

            // Calcular la letra del DNI
            let indiceLetra = dni % 23;
            let letraCorrecta = letras[indiceLetra];

            if (letra !== letraCorrecta) {
                alert("La letra proporcionada no es correcta. La letra correcta es: " + letraCorrecta);
                return false;
            }

            // Si todo está correcto
            alert("El número y la letra del DNI son correctos.");
            return true;

}