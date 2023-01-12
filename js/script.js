$(()=>{
    /* a tag default option remove */
    $('a').click((e)=>{
        e.preventDefault();
    });
    var card = new Swiper("#card-wrap", {
        effect: "cards",
        grabCursor: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
    var news = new Swiper("#news", {
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        pagination: {
            el: "#news-pager",
            clickable: true,
        },
    });
});