$(document).ready(function(){
  $(".btn2").hide();


  $(".btn1").click(function(){
    $("#abc").slideUp();
    $(".btn1").hide()
    $(".btn2").show()
  });
  $(".btn2").click(function(){
    $("#abc").slideDown("slow");
    $(".btn1").show()
    $(".btn2").hide()
  });




  $('#ad_task').click(function(e) {
      $('#myPopup').lightbox_me({
          centered: true
        });
      e.preventDefault();
  });


});


/*! jQuery Mobile 1.4.2 | Git HEAD hash: 9d9a42a <> 2014-02-28T17:32:01Z | (c) 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

