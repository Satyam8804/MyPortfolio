new kursor({
	type: 1,
   color:"rgba(0, 251, 255,0.2)",
   
})

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
item.addEventListener("click" ,activeLink));

// contact  form



function showForm() {
   document.getElementsByClassName('contact-form')[0].style.display="block";
   document.getElementsByClassName('contact-details')[0].style.display="none";
}

//  email service 



const btn = document.getElementById('button');
function sendEmail() {
Email.send({
    Host : "smpt.gmail.com",
    Username : "satyam8804378323@gmail.com",
    Password : "@Satyam6207",
    To : 'satyam347.sk@gmail.com',
    From : document.getElementById(email_id).value,
    Subject : "New Contact Form Enquiry",
    Body : document.getElementById('message').value
}).then(
  message => alert(message)
);
}


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

