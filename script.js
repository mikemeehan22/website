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

$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();
    var toSubmit = {};
    toSubmit.email = $("#email").val();
    toSubmit.name = $("#name").val();
    toSubmit.message = $("#message").val();
    $.ajaxSetup({
      headers: {
        'Accept': "application/json",
      }
    });
    
    var form_submit = $.post("https://formspree.io/f/mknyqbyo", toSubmit);
    
    form_submit.done(function(){
      alert("Your email has been sent");
      $("#form-success").modal('show');
      $("#email").val("");
      $("#name").val("");
      $("#message").val("");
    });
    
    form_submit.fail(function(){
      alert("Your email was NOT sent!");
      $("#form-error").modal('show');
    });
    
    
  })
});