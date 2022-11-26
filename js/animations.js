const all = document.querySelectorAll(".btn")

all.forEach(element => {
    element.addEventListener("click", ()=>{
        const clicked = document.querySelector(`[id="${element.id}"]`)
        
        let classes = clicked.className.split(" ")
        if (classes.includes("number") || element.id === "dot" || element.id === "delete" || element.id === "clear"){
            clicked.classList.add("clicado");
        }else if(element.id === "equal"){
            clicked.classList.add("clicado-equal");
        }else{
            clicked.classList.add("clicado-action");
        }
        
    })
    
    element.addEventListener("transitionend", removeclass)
    
});


function removeclass (e) {
    if (e.propertyName !== "transform") return
        this.classList.remove("clicado");
        this.classList.remove("clicado-action");
        this.classList.remove("clicado-equal");
}