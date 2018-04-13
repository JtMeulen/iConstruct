$(window).bind('scroll', function(){
    if ($(window).scrollTop() > 250){
        $("nav").addClass('nav-fixed');
    } else {
        $("nav").removeClass('nav-fixed');
    }
});        

$(".burger").click(function(){
    $(".nav-items").toggleClass("menu-show");   
});