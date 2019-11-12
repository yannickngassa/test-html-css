$(function () {
    const main = document.getElementById('main')
    const header = document.getElementById('header')
    $(".js-choosen-select").chosen()
})

window.addEventListener('load', function () {
    resizeContainerBlock()
})

window.addEventListener('resize', function () {
    resizeContainerBlock()
})

function resizeContainerBlock() {
    const container = document.getElementById('containerBlock')
    container.style.minHeight = window.innerHeight - header.offsetHeight + 'px';
}