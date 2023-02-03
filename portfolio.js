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


//NavBar

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active')
}

list.forEach((item)=>
item.addEventListener('click' ,activeLink));



// <!-- Initialize Swiper  -->

var swiper = new Swiper('.mySwiper', {
    
    slidesPerView:'auto',
    spaceBetween: 50,
    centeredSlides:true,
    grabCursor:true,
    loop: true,
    observer:true,
    observerParents:true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        948: {
           slidesPerView: 'auto',
           spaceBetween: 150,

        }
        
     }
    
  });

 
