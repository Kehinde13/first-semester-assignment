let button = document.getElementsByClassName("accordion");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        button[i].classList.toggle("active")
     
        let panel = button[i].nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
}