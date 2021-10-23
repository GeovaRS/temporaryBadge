/*
Exemplo de como alterar os links das redes sociais com javascript

Criando os dados:

const github = "jakeliny"
const youtube = "jakelinygracielly"
const facebook = "maykbrito"
const instagram = "jakeliny.gracielly"
const twiiter = "maykbrito"

Criando Funções:

function showMeSomething(texto) {
Se deixar as chaves em branco e chamar algo em showMeSomething não vai aparecer nada no alerta. Para isso colocamos a variável dentro das chaves
  alert(texto)
}

showMeSomething(links.github)

ARROW FUNCTIONS

function nomedafuncao(argumento1, argumento2) {
  codigo
}

nomedafuncao()

(argumento1, argumento2) => {
  código
}
*/

const linksSocialMedia = {
  github: 'helderhsilva',
  linkedin: 'helderhsilva',
  facebook: 'HHS.Helder',
  instagram: 'hhs_helder',
  twitter: 'theHprogrammer'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Olivia'

  //userName.textContent = 'Macelo'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('id')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name

      userBio.textContent = data.bio
      
      userImage.src = data.avatar_url

      userLink.href = data.html_url

      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

function exchangeCard() {}
