// 동영상 제어
const video = document.getElementById('wwdc21');
const fig2 = document.querySelector('.wwdc21-post');

video.addEventListener('ended', function(end){
    fig2.classList.add('appear');
    video.classList.add('disappear');
})

// 하단 디렉토리 메뉴 모바일 대응
const directory = document.querySelector('.label');

function toggleMenu(id) {
    const clicked = document.getElementById(id);
    const target = clicked.nextSibling.nextSibling;
    if(target.classList == "directory-items") {
        target.classList.add('visible');
    } else {
        target.classList.remove('visible');
    }
}
