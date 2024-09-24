const optionImages = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")

function handleOptionClick(event){
    const clickdImage = event.currentTarget

    container.classList.add("start")
    resultText.textContent = "..."

    setTimeout (() => {
        container.classList.remove("start")


        resultText.textContent = "X ganhou"
    }, 2000); // 2000milisegundos = 2 segundos
}







optionImages.forEach( img => {
    img.addEventListener("click", handleOptionClick)

})


// Parei no minuto 52 do video
