const ratingForm = document.getElementById('rating-form')
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card')
console.log(ratingForm);
ratingForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    ratingCard.classList.add('hide-card')
    const ratingValue = document.getElementById('rating-value')
    ratingValue.innerText = document.querySelector('input[name="rating"]:checked').value
    thankYouCard.classList.remove('hide-card')
})