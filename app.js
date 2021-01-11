let modal = document.getElementById('modal');
let snowballModal = document.getElementById('snowball-modal');

let modalButton = document.getElementById('motion-design-card');
let snowballModalButton = document.getElementById('snowball-card');

let closeButton = document.getElementById('closeBtn');
let overlay = document.getElementById('overlay');

snowballModalButton.addEventListener('click', openModalSnowball)
modalButton.addEventListener('click', openModalMotionDesign);
closeButton.addEventListener('click', closeModal);

function openModalSnowball() {
    snowballModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = "hidden";
}

function openModalMotionDesign() {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = "hidden";
}

function closeModal() {
    snowballModal.classList.remove('active');
    modal.classList.remove('active');
    // contactModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = "auto";
}

overlay.addEventListener('click', () => {
   closeModal();
});

