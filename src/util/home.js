const jeans_js = document.querySelector('.jeans-js');
const sub_jeans_js = document.querySelector('.sub-jeans-js');

jeans_js.addEventListener('click', () => {
    sub_jeans_js.classList.contains('open') || ''
        ? sub_jeans_js.classList.remove('open')
        : sub_jeans_js.classList.add('open');
});
