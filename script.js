const buttons = document.querySelectorAll('.rating-button');
const ratingCard = document.getElementById('rating-card');
const submitBtn = document.getElementById('submit-btn');
const userSelection = document.getElementById('rating-selected')
const modal = document.querySelector('.modal')
console.log(modal)
buttons.forEach(button => { 
    button.addEventListener('click', () => {
        buttons.forEach(button => {
            if(button.classList.contains('selected')) { 
                button.classList.remove('selected'); 
            }
        })
        button.classList.toggle('selected')
    })
})

submitBtn.addEventListener('click', () => {
    for(let button of buttons) {
        if(button.classList.contains('selected')) {
            console.log(button.value) 
            userSelection.innerText = button.value;
            ratingCard.classList.add('hide');
            modal.setAttribute('id','show'); 
        }
    }
})