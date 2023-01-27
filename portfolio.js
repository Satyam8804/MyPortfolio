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
