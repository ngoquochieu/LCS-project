const container_details_js = document.querySelector('.container-details-js');
const fade_js = document.querySelector('.fade-js');
const show_more = document.querySelector('.show-more');
const show_less = document.querySelector('.show-less');
show_more.addEventListener('click', () => {
    container_details_js.classList.add('show');
    show_more.classList.toggle('open');
    show_less.classList.toggle('open');
});
show_less.addEventListener('click', () => {
    container_details_js.classList.remove('show');
    show_more.classList.toggle('open');
    show_less.classList.toggle('open');
});
