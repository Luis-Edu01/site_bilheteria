document.getElementById('bilheteria').addEventListener('submit', function(event) {
    event.preventDefault()

    // Captura os valores dos campos
    
    const nome = document.getElementById('nome').value;
    let nome2 = nome;
    nome2 = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const github = document.getElementById('github').value;
    const upload = document.getElementById('upload').files[0];

    
    console.log('Nome:', nome);
    console.log('Nome:', nome2);
    console.log('E-mail:', email);
    console.log('GitHub:', github);
    console.log('Imagem:', upload ? 'Selecionada' : 'Não selecionada');

    // Converte a imagem --> feito por IA
    if (upload) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const base64 = event.target.result;

            // Armazena os dados no localStorage
            localStorage.setItem('nome', nome);
            localStorage.setItem('nome', nome2);
            localStorage.setItem('email', email);
            localStorage.setItem('github', github);
            localStorage.setItem('imagem', base64);

            console.log('Dados armazenados no localStorage:', { nome, nome2, email, github, imagem: base64 });

            // Redireciona para a página de exibição
            window.location.href = 'pages/tickt.html';
        };
        reader.readAsDataURL(upload) // Lê o arquivo como URLBase64
    } else {
        alert('Por favor, selecione uma imagem.');
    }
});