



const images = document.querySelectorAll(".img-fundo"); // Seleciona todas as imagens
let currentIndex = 0; // Índice da imagem atual

const prevButton = document.querySelector(".prev-image");
const nextButton = document.querySelector(".next-image");

prevButton.addEventListener('click', () => {
    // if(currentIndex === 0){
    //     currentIndex = images.length // Para pular para a ultima imagem
    // }
    if (currentIndex === 0) return
    removeClasse()
    currentIndex--
    addClasse()
    opacity()

})

nextButton.addEventListener('click', () => {
    // if(currentIndex === images.length -1){  // Para voltar a primeira imagem 
    //     currentIndex = -1
    // }
    if (currentIndex === images.length - 1) return
    removeClasse()
    currentIndex++
    addClasse()
    opacity()
})

function removeClasse() {
    images[currentIndex].classList.remove('ativa')

}

function addClasse() {
    images[currentIndex].classList.add('ativa')
}



function opacity() {
    if (currentIndex === 0) {
        prevButton.classList.add('opacity')
    } else {
        prevButton.classList.remove('opacity')
    }
    const lastImg = images.length - 1
    if (currentIndex === lastImg) {
        nextButton.classList.add('opacity')
    } else {
        nextButton.classList.remove('opacity')
    }

}

console.log(images.length);

// imagens.length = Tamanho do array de imagens






