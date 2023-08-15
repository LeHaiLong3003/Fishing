/* 
    * Wrote by Le Dinh Chung-10004
    * on 08/03/2021
*/
$('.bw_open_modal').click(function(){
    $(".bw_modal").removeClass('bw_modal_open');
    var id_modal = $(this).attr('data-href');
    $(id_modal).addClass('bw_modal_open');
    $('.bw_close_modal').click(function(){
        $(id_modal).removeClass('bw_modal_open');
    })
})

$('.bw_tabs li').click(function(){
    $(this).parent().find('li').removeClass('bw_active');
    $(this).parent().next().find('.bw_tab_item').removeClass('bw_active');
    $(this).addClass('bw_active');
    var id_tabs = $(this).find('a').attr('data-href');
    $(id_tabs).addClass('bw_active');
});


$('iframe.bw_ifr_yotube').each(function(){
    var w_iframe = $(this).width();
    h_iframe = w_iframe*9/16;
    $(this).attr({'width':w_iframe, 'height':h_iframe});
})

$(document).ready(function() {
    $(".bw_show_fie").hide();
    $(".bw_close_fiexd").click(function(){      
        $(this).animate({right: '0'});
      $(".bw_boxpro_fiexd").animate({width: '0'});
      $(".bw_show_fie").show('slow');
    });

    $(".bw_show_fie").click(function(){
        $(this). hide({right:'0' })
      $(".bw_boxpro_fiexd").animate({width: '180px'});
      $(".bw_close_fiexd").show('slow');
    });
  });


  $(document).ready(function(){
    $(".bw_open_helpcenter").click(function(){
      $(this).hide('slow');
      $(".bw_helpcenter").show();
      $(".bw_helpcenter").animate({bottom: '6em'});
      $(".bw_open_review").animate({bottom: '16.5em'})
    });
    $("#bw_close_fi").click(function(){
      $(".bw_helpcenter").hide('slow');
      $(".bw_open_helpcenter").show('slow');
      $(".bw_open_helpcenter").animate({bottom: '6em'});
      $(".bw_open_review").animate({bottom: '10em'})
    });
    $("#bw_help_chat").click(function(){
      $("#bw_box_chat").show();
      $("#bw_box_chat").animate({width: '100%'});
    });
    $("#bw_help_review").click(function(){
      $("#bw_box_review_feixd").show();
      $("#bw_box_review_feixd").animate({width: '100%'});
    });
    $(".bw_close_modal").click(function(){
      $("#bw_box_chat").hide('slow');
      $("#bw_box_review_feixd").hide('slow');
      $(".bw_helpcenter").show( 'slow');
      $("#bw_box_chat").animate({width: '0'});
      $("#bw_box_review_feixd").animate({width: '0'});
    });
    $("#bw_note_chat_fininsh").hide();
    $("#btclose").click(function(){
      $("#boxform_aks").hide('slow');
      $("#bw_note_chat_fininsh").show('slow'); 
    });
    $("#bw_note_review_fininsh").hide();
    $("#btn_rive").click(function(){
      $("#boxform_rive").hide('slow');
      $("#bw_note_review_fininsh").show('slow'); 
    });
   
  });
  





  ///////////////
var offset = 200;
var duration = 500;
$(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
        $('.scroll-to-top').fadeIn(400);
    } else {
        $('.scroll-to-top').fadeOut(400);
    }
   
});

$('.scroll-to-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});