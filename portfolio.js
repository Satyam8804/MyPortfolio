$(window).on("load",function(){

    $(".loader-wrapper").fadeOut("slow");
});


(function student(){
    var word =[" A Student"," An Engineer"," A Developer"],
    i=0;
    setInterval(function(){
        $('#eng').fadeOut(function(){
            $(this).html(word[i = (i+1)%word.length]).fadeIn();
        });
    },2000)
})();

// <!-- Initialize Swiper  -->

var swiper = new Swiper('.mySwiper', {
    
    slidesPerView:'auto',
    spaceBetween: 40,
    centeredSlides:true,
    grabCursor:true,
    loop: true,
    observer:true,
    observerParents:true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    // coverflowEffect:{
    //     rotate:0,
    //     stretch:0,
    //     depth:100,
    //     modifier:1,
    //     // slideshadow:true
    // },
    
  });

