const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
    navigation.classList.remove('active');
    menuToggle.classList.remove('active');
})

function menu(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}