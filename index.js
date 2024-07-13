// Toggle class active Untuk Soto Menu
const navbarNav = document.querySelector('.navbar-nav');
//Ketika Soto Menu di klik
document.querySelector('#soto-menu').onclick = (e) =>{
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

//Klik di luar elemen
const st = document.querySelector('#soto-menu');

document.addEventListener('click', function(e) {
    if(!st.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});