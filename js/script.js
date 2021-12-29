  $(document).ready(function(){
    $("#design-png").on("click",function(){
      $("#design-png").hide('1000');
      $(".design").show();
    });
    $(".design").on("click",function(){
      $(".design").hide();
      $("#design-png").show('1500');
    });

    $("#development-png").on("click",function(){
      $("#development-png").hide('1000');
      $(".development").show();
    });
    $(".development").on("click",function(){
      $(".development").hide();
      $("#development-png").show('1500');
    });
  
    $("#product-png").on("click",function(){
      $("#product-png").hide('1000');
      $(".product").show();
    });
    $(".product").on("click",function(){
      $(".product").hide();
      $("#product-png").show('1500');
    });
    });

    $("document").ready(function(){
        $(".text").hover(function(){
            $(this).animate({opacity:'1'});
            $(".text").show();
        },
        function(){
            $(this).animate({opacity:'1'})
        });
    });