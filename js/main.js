// 동영상 제어
const video = document.getElementById('wwdc21');
const fig2 = document.querySelector('.wwdc21-post');

video.addEventListener('ended', function(end){
    fig2.classList.add('appear');
    video.classList.add('disappear');
})

// 하단 디렉토리 메뉴 모바일 대응

const getEvent = function getEvent(event) {
    const target = event.currentTarget;
    const sibilng = target.nextSibling.nextSibling;
    if(sibilng.classList == "directory-items") {
        sibilng.classList.add('visible');
    } else {
        sibilng.classList.remove('visible');
    }
}