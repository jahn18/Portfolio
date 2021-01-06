let modal = document.getElementById('modal');
let modalButton = document.getElementById('motion-design-card');
let closeButton = document.getElementById('closeBtn');
let overlay = document.getElementById('overlay');

modalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = "auto";
}

overlay.addEventListener('click', () => {
   closeModal();
});

