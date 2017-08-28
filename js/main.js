/* fx nav color scroll*/
$(document).ready(function() {
$(window).scroll(function() {
        $('#nav-trans').toggleClass('nav', $(this).scrollTop() > $('#nav-trans').height());
      });

 $(".button-collapse").sideNav({
  closeOnClick:true,
  menuWidth:100,
 });
});


