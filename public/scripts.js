const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener("click", function() {
        const curseId = card.getAttribute('id');
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.rocketseat.com.br/${curseId}`;
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){ 
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src=""
    modalOverlay.classList.remove("maximize");
    
})

document.querySelector(".maximize-modal").addEventListener("click", function(){
    modalOverlay.firstElementChild.classList.add("maximize");
})

document.querySelector(".minimize-modal").addEventListener("click", function(){
    modalOverlay.firstElementChild.classList.remove("maximize");
})