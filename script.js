function toggleButton() {
  // mudando o fundo

  //Selecionamos o HTML
  const html = document.documentElement
  // Mudamos o HTML com o toggle
  html.classList.toggle("light")

  //Mudando a imagem

  // pegar a tag image
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver ligth mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "avatar-day")
  } else {
    // Se não tiver ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-night.png")
    img.setAttribute("alt", "avatar-night")
  }
}
