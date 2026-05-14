$(document).ready(function(){


// 메인슬라이드
const mv = new Swiper(".mv", {
    autoplay: {
        delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    navigation: {
        nextEl: '.swiper-button-next', // 다음 버튼
        prevEl: '.swiper-button-prev', // 이전 버튼
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
        clickable: true, // 버튼 클릭 여부
    },
    loop: true,
});


const menu_list = new Swiper(".menu_list", {
    autoplay: {
        delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    loop: true,
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
    speed: 1000, // 슬라이드 동작 속도
    slidesPerView: 4, // 한 슬라이드에 보여줄 갯수
    spaceBetween: 30, // 슬라이드 사이 여백
});

});
