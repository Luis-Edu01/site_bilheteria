// Recupera os dados do localStorage
const nome = localStorage.getItem('nome')
const nome2 = localStorage.getItem('nome')
const email = localStorage.getItem('email')
const github = localStorage.getItem('github')
const imagem = aglocalStore.getItem('imagem')

console.log('Dados recuperados do localStorage:', { nome, nome2, email, github, imagem })

// Exibe os dados na página
if (nome && nome2 && email && github && imagem) {
    document.getElementById('exibirNome').textContent = nome
    document.getElementById('exibirEmail').textContent = email
    document.getElementById('exibirGithub').textContent = github
    document.getElementById('exibirImagem').src = imagem
    document.getElementById('exibirNome2').textContent = nome2
} else {
    document.getElementById('exibirNome').textContent = 'Nenhum nome encontrado.'
    document.getElementById('exibirNome2').textContent = 'Nenhum nome encontrado.'
    document.getElementById('exibirEmail').textContent = 'Nenhum e-mail encontrado.'
    document.getElementById('exibirGithub').textContent = 'Nenhum GitHub encontrado.'
    document.getElementById('exibirImagem').alt = 'Nenhuma imagem encontrada.'
}