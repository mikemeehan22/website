    $(document).ready(function(){
      $("#readmore").click(function(){
          $(".hidden").fadeIn();
          $("#readmore").fadeOut();
        });
      $("#readless").click(function(){
        $(".hidden").fadeOut();
        $("#readmore").fadeIn();
    });
});

function validateForm()                                    
{ 
    alert($("#name").val());
   }