const all = document.querySelectorAll(".btn")

all.forEach(element => {
    element.addEventListener("click", ()=>{
        const cliked = document.querySelector(`[id="${element.id}"]`)
        cliked.classList.add("clicado");
    })
    
});

all.forEach(element => {
    
    element.addEventListener("transitionend", removeclass)
});

function removeclass (e) {
    if (e.propertyName !== "transform") return
        this.classList.remove("clicado");
}