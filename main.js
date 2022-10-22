const ratingForm = document.getElementById('rating-form')
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card')
console.log(ratingForm);
ratingForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    const rating = document.querySelector('input[name="rating"]:checked')
    if (rating == null) {
        alert("Please input a rating.")
    } else {
        ratingCard.classList.add('hide-card')
        const ratingValue = document.getElementById('rating-value')
        ratingValue.innerText = rating.value
        thankYouCard.classList.remove('hide-card')
    }
})
