/* Desarrollar un formulario de contacto con un evento que cuando se quite el focus del input,
verifique que lo que se ha metido en el input es correcto (el
asunto no está vacío, cc es un correo, el cuerpo del mensaje
no está vacío...). En caso de ser correcto, se mostrará el borde
del input en verde. En caso de ser incorrecto, se mostrará el
borde del input en rojo y se añadirá debajo un texto en rojo
indicando que no se cumplen los requisitos. */
document.getElementById('asunto').addEventListener('blur', function() {
    validateField(this, this.value.trim() !== '', 'asuntoError', 'El asunto no puede estar vacío.');
});
document.getElementById('email').addEventListener('blur', function() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    validateField(this, emailPattern.test(this.value.trim()), 'emailError', 'Debes introducir un correo electrónico válido.');
});
document.getElementById('mensaje').addEventListener('blur', function() {
    validateField(this, this.value.trim() !== '', 'mensajeError', 'El cuerpo del mensaje no puede estar vacío.');
});
function validateField(inputElement, condition, errorElementId, errorMessage) {
    const errorElement = document.getElementById(errorElementId);
    if (condition) {
        inputElement.classList.remove('error');
        inputElement.classList.add('success');
        errorElement.style.display = 'none';
    } else {
        inputElement.classList.remove('success');
        inputElement.classList.add('error');
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
    }
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
});
