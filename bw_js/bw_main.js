var header_h = $('header').height();
$(window).scroll(function(){
  var scroll_h = $(window).scrollTop();
  if(scroll_h > header_h){
    $('header').addClass('bw_fixed');
  } else{
    $('header').removeClass('bw_fixed');
  }
});

$("select").each(function(){
  var id_t = $(this).attr('id');
  if(id_t == null || id_t == ''){
  } else{
    var id_select = '#'+$(this).attr('id');
    var mySelect = new Select(id_select,{
      filtered: 'auto',
      filter_threshold: 8,
      filter_placeholder: 'Tìm kiếm...'
      
    });
  }
});


$(document).ready(function(){
  $("#bw_add_address").click(function(){
    $("#form_addess").slideToggle("slow");
  });
  $("#bw_finish_add").click(function(){
    $("#form_addess").slideUp("slow");
  });
  $("#bw_cancel").click(function(){
    $("#form_addess").slideUp("slow");
  });
});



/// menu mobile

$('#bw_menu').click(function(){
  $(this).toggleClass('bw_close_menu');
  $('#bw_main_menu').toggleClass('bw_opend');
});


$('.bw_close_menu').click(function () {
  $(this).parent().parent().removeClass('bw_opend');
});


///đánh giá sao

$(document).ready(function(){
  $(".bw_rating_select input").click(function(){
    $(".coding_form").slideDown();
  });
 
});

/// thanh toán trả góp
$(document).ready(function(){
  $(".bw_form_chose_bank div ").click(function(){
    $(this).addClass('active');
    $(".bw_chose_card").slideDown();
  });

  $(".bw_chose_card .bw_form_chose_bank div ").click(function(){
    $(this).addClass('active');
    $(".bw_chose_month").slideDown();
  });
  $(".bw_click_active").click(function(){
    $(this).addClass('active');
    $('.bw_chose_month').addClass('bw_chose_month');
    $(".bw_infomation_cus_pay").slideDown();
    $(".bw_box_off").slideDown();
  });
 
});



$(document).ready(function() {
  $('.bw_accordion-item.active .bw_accordion-body').slideDown();
  $('.bw_accdin_header').click(function() {
      $(this).parent().toggleClass('active');
      $(this).parent().children('.bw_accordion-body').slideToggle();
  });
});



$(document).ready(function() {
  $('.bw_accode_mb.active .bw_navmobi').slideDown();
  $('.bw_lipro').click(function() {
      $(this).parent().toggleClass('active');
      $(this).parent().children('.bw_navmobi').slideToggle();
  });
});


function myFunction() {
  var dots = document.getElementById("conten_profile");
  var moreText = document.getElementById("bw_moreprofile");
  var btnText = document.getElementById("readmore_pro");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Xem thêm"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Rút gọn"; 
    moreText.style.display = "inline";
  }
}

///model image comment


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bw_slide_view");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}







