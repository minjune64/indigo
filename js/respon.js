const menu_toggle_btn = document.querySelector('.menu_toggle_btn');
const gnb = document.querySelector('.header .gnb');

menu_toggle_btn.addEventListener('click', () => {
    if (gnb.classList.contains('active')) {
        gnb.classList.remove('active');
        menu_toggle_btn.classList.remove('active');
    } else {
        gnb.classList.add('active');
        menu_toggle_btn.classList.add('active');
    }
});



















