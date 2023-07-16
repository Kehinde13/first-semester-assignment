let button = document.getElementsByClassName("accordion");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        
         if(button[i].classList.contains('active')) {
            button[i].classList.remove('active')

        } else {
            document.querySelector('.accordion.active')?.classList.remove('active')
            button[i].classList.add('active')
        }
        
    })
}