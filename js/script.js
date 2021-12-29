  $(document).ready(function(){
    $("#design-png").on("click",function(){
      $("#design-png").slideDown().hide('1000');
      $("#design").show();
    });
    $("#design").on("click",function(){
      $("#design").slideUp();
      $("#design-png").slideDown();
    });

    $("#development-png").on("click",function(){
      $("#development-png").slideDown().hide('1000');
      $("#development").show();
    });
    $("#development").on("click",function(){
      $("#development").slideUp();
      $("#development-png").slideDown();
    });
  
    $("#product-png").on("click",function(){
      $("#product-png").slideDown().hide('1000');
      $("#product").show();
    });
    $("#product").on("click",function(){
      $("#product").slideUp();
      $("#product-png").slideDown();
    });
  });

  $("document").ready(function(){
      $("#development").css("border", "1px solid green");
      $("#design").css("border", "1px solid green");
      $("#product").css("border", "1px solid green");
  });
  