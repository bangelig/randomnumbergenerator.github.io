document.getElementById('generate-btn').addEventListener('click', generateRandomNumber);

function generateRandomNumber() {
    const min = parseInt(document.getElementById('min-number').value);
    const max = parseInt(document.getElementById('max-number').value);

    if (min >= max) {
        alert('Angka minimal harus lebih kecil dari angka maksimal.');
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('random-number').textContent = randomNumber;
}
