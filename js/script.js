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
    
    $(".text").hover(function(){
        $(this).animate({opacity:'1'});
    },
    function(){
        $(this).animate({opacity:'0'});
        $(".text").show()
    });

    $(".submit").click(function(){
      //the alert box is working//
      //alert("Hello");//
        alert("Hello we have received your request.Thank you for reaching out to us.");
      }
    );


  });
  