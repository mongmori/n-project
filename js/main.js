// 동영상 제어
const video = document.getElementById('wwdc21');
const fig2 = document.querySelector('.wwdc21-post');

video.addEventListener('ended', function(end){
    fig2.classList.add('appear');
    video.classList.add('disappear');
})

// 하단 디렉토리 메뉴 모바일 대응

const getEvent = function getEvent(event) {
    let target = event.currentTarget;
    let sibling = target.nextSibling.nextSibling;
    if(sibling.classList == "directory-items") {
        sibling.classList.add('visible');
    } else {
        sibling.classList.remove('visible');
    }
}