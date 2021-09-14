   $(document).ready(function() { 
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development")(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
      });
  
 
    $("#design-image").click(function(){
      $("#design-image").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-image").slideDown('1500');
    });
  
  
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#hover").show();
    }).mouseout(function(){
      $("#hover").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#hover2").show();
    }).mouseout(function(){
      $("#hover2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#hover3").show();
    }).mouseout(function(){
      $("#hover").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#hover4").show();
    }).mouseout(function(){
      $("#hover4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#hover4").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#hover6").show();
    }).mouseout(function(){
      $("#hover6").hide();
    });
    $("#work7").mouseover(function(){
      $("#hover7").show();
    }).mouseout(function(){
      $("#hover7").hide();
    });
    $("#work8").mouseover(function(){
      $("#hover8").show();
    }).mouseout(function(){
      $("#hover8").hide();
    });
  });
  
  $(document).ready(function(){
    $("form#form34A").submit(function(event){
      event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });
  