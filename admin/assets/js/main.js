
// Animated signup form
let innerContainer = document.querySelector('.form-inner-container');

// show and hide modal
let signInBtn = document.querySelector('.signin');
let modal = document.querySelector('.modal');
let pageWrap = document.querySelector('.page-wrap');

signInBtn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    pageWrap.classList.add('blur');
    innerContainer.classList.add('left');
    innerContainer.classList.remove('right');
});

modal.addEventListener('click', (evt) => {
    // if only the modal itself is clicked (outer space)
    if (evt.target === modal ) {
        modal.classList.remove('show');
        modal.classList.add('hide');
        pageWrap.classList.remove('blur');
        innerContainer.classList.remove('left');
        innerContainer.classList.add('right');
    }
});

let logInButton = document.getElementById("login-button");
logInButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'profile.html'
});
