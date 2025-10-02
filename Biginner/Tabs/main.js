const buttons = document.querySelectorAll('button')
const image = document.querySelector('img')

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if(button.id == 1){
           image.src = 'images/1.jpg'
        }
        if(button.id == 2){
           image.src = 'images/2.png'
        }
        if(button.id == 3){
           image.src = 'images/3.jpg'
        }
        if(button.id == 4){
           image.src = 'images/4.png'
        }
    })
})