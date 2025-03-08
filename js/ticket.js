const nome = localStorage.getItem('nome');
const nome2 = localStorage.getItem('nome');
const email = localStorage.getItem('email');
const github = localStorage.getItem('github');
const imagem = localStorage.getItem('imagem'); 
console.log('Dados recuperados do localStorage:', { nome, nome2, email, github, imagem });


if (nome && nome2 && email && github && imagem) {
    document.getElementById('exibirNome').textContent = nome;
    document.getElementById('exibirNome2').textContent = nome2;
    document.getElementById('exibirEmail').textContent = email;
    document.getElementById('exibirGithub').textContent = github;
    document.getElementById('exibirImagem').src = imagem;
} else {
    document.getElementById('exibirNome').textContent = 'Nenhum nome encontrado.';
    document.getElementById('exibirNome2').textContent = 'Nenhum nome encontrado.';
    document.getElementById('exibirEmail').textContent = 'Nenhum e-mail encontrado.';
    document.getElementById('exibirGithub').textContent = 'Nenhum GitHub encontrado.';
    document.getElementById('exibirImagem').alt = 'Nenhuma imagem encontrada.';
}



function getRandomInt(min, max) { // Gera Número aleatório para Ticket criado
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInt(1, 1000000); 


const now = new Date(); // Data e Hora atual da criação do Ticket
const dateTime = now.toLocaleString();

document.getElementById("numeroAleatorio").textContent = randomNumber;
document.getElementById("dataHora").textContent = dateTime;






                        // Feito por IA

// Função para obter a cidade a partir das coordenadas
async function getCityName(latitude, longitude) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();
        return data.address.city || data.address.town || data.address.village || "Cidade não encontrada";
    } catch (error) {
        console.error("Erro ao obter a cidade:", error);
        return "Erro ao carregar cidade";
    }
}

// Obtem localização atual do usuário
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const city = await getCityName(latitude, longitude);
                document.getElementById("cidade").textContent = city;
            },
            (error) => {
                console.error("Erro na geolocalização:", error);
                document.getElementById("cidade").textContent = "Permissão de localização negada";
            }
        );
    } else {
        document.getElementById("cidade").textContent = "Geolocalização não suportada pelo navegador";
    }
}
getLocation();