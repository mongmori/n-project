const video = document.getElementById('wwdc21');
const fig2 = document.querySelector('.wwdc21-post');

video.addEventListener('ended', function(end){
    fig2.classList.add('appear');
    video.classList.add('disappear');
})