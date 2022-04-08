$(document).ready(

$('.temp1').fadeIn(1500),
$('.nave').fadeIn(1000),
$('.nave0').fadeIn(500),
$(window).scroll(function() {

    if ($(window).scrollTop()+1000 > $('.section').offset().top) {

    $('.temp3').animate({left:0},1000) 
    $('.temp2').animate({right:0},1000) 
 
   };
   if ($(window).scrollTop()+1000 > $('.temp5').offset().top) {
    $('.temp5').fadeIn(2500)
   };
   if ($(window).scrollTop()+1000 > $('.section4').offset().top) {

    $('.temp6').animate({left:0},1000) 
    $('.temp7').animate({right:0},1000) 
 
   }
   if ($(window).scrollTop()+1000 > $('.bef-footer').offset().top) {
    $('.my-t').animate({top:0},1000) 
    $('.my-b').animate({bottom:0},1000) 
   };

}),


)