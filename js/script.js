$(()=>{
    /* a tag default option remove */
    $('a').click((e)=>{
        e.preventDefault();
    });
    /* faq toggle event */
    $('.faq_head').click(function(){
        $(this).children('.arrow').toggleClass('arrow-action');
        $('.faq_head').children('.arrow').not($(this).children('.arrow')).removeClass('arrow-action');
        $('.faq_content').stop().slideUp(400);
        $(this).siblings(".faq_content").stop().slideToggle(400);
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
        slidesPerView: 'auto',
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
        },
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: "#news-pager",
            clickable: true,
        },
    });
    var made = new Swiper("#made", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    /* scrollToGiverClass */
    $("header").scrollToGiveClass({
        class: "fixed",
        baseline: 80,
    });
    $(".made").scrollToGiveClass({
        class: "scrolled",
        baseline: "middle",
        add: 100,
    });
});