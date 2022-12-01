window.addEventListener("scroll" , () => {
    document.querySelector(".navbar").classList.toggle
    ("window-scrooll" , window.scrollY > 1500)
})



const branch = document.querySelector(".navbar .branch");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

openMenuBtn.addEventListener("click", () => {
    branch.style.display = "flex" 
    closeMenuBtn.style.display = "inline-block"
    openMenuBtn.style.display = "none"
})

const closeNav = () => {
    branch.style.display = "none" 
    closeMenuBtn.style.display = "none"
    openMenuBtn.style.display = "inline-block"
} 

closeMenuBtn.addEventListener("click", closeNav);