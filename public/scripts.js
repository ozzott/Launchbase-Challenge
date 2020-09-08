const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener("click", function() {
        const curseId = card.getAttribute('id');
       window.location.href = `/courses/${curseId}`
    })
}
