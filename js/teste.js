function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInt(1, 1000000);
console.log(randomNumber); // Número aleatório entre 1 e 100 (inclusivo)

const now = new Date();
const dateTime = now.toLocaleString(); // Formata a data e hora no formato local
console.log("Data e Hora:", dateTime);