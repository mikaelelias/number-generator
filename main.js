const btnGenerator = document.querySelector(".btn-generator");
const resultElement = document.querySelector(".result");
const containerResult = document.querySelector(".container-result");

btnGenerator.addEventListener('click', function() {
    const min = parseInt(document.querySelector('.input-innit-number').value);
    const max = parseInt(document.querySelector('.input-second-number').value);

    if (isNaN(min) || isNaN(max)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    if (max <= min) {
        alert('O Segundo número não pode ser menor ou igual ao primeiro.');
    } else {
        const randomResult = Math.floor(Math.random() * (max - min + 1) + min);
        resultElement.textContent = "Generated Number: " + randomResult;
        containerResult.style.display = "block";
    }    
});
