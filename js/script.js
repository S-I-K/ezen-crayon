$(()=>{
    var card = new Swiper("#card-wrap", {
        effect: "cards",
        grabCursor: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
      });
});