const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const anoBtn = document.querySelector(".ano-btn")
const inamoBtn = document.querySelector(".inamo-btn")

anoBtn.addEventListener("click", ()=> {
    question.innerHTML = "pakyu ka gago";
    gif.src= "https://media.tenor.com/qwZ_2r74tucAAAAM/kuya-jobert-pakyu.gif"
})

inamoBtn.addEventListener("mouseover", ()=> {
    const inamoBtn = inamoBtn.getBoundingClientRect();
    const maxX = window.innerWidth - inamoBtnRect.width;
    const maxY = window.innerHeight - inamoBtnRecthHeight;

    const randomX = Math.floor(Math.random() *maxX)
    const randomY = Math.floor(Math.random()  *maxX)

    inamoBtn.style.left = randomX + "px";
    inamoBtn.style.top = randomY + "px"
})
