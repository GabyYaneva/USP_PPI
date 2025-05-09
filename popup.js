
const userIcon = document.getElementById('user-icon');
const popup = document.getElementById('registration-popup');
const closePopup = document.getElementById('close-popup');


userIcon.addEventListener('click', () => {
    popup.style.display = 'flex'; 
});


closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; 
});


window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
