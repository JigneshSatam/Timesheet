$(document).ready(function(){
  $(".btn2").hide()

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
});
