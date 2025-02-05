const buttons = document.querySelectorAll('.one');
const submit = document.querySelector('.submit');
const thanksCard = document.getElementById('thanks');
const numberDisplay = document.getElementById('number');
const ratingCard = document.querySelector('.card'); 


let selectedValue = null;


buttons.forEach(button => {
    button.addEventListener('click', function() {
        
        
        buttons.forEach(b => b.classList.remove('selected'));
        
        
        
        this.classList.add('selected');
        
        
        
        selectedValue = this.getAttribute('data-value');
    });
});



submit.addEventListener('click', function() {
    if (selectedValue) {
        
        
        numberDisplay.innerText = selectedValue;

        
        
        ratingCard.style.display = 'none';
        thanksCard.style.display = 'block';
    } else {
        alert('Please select a rating before submitting.');
    }
});
