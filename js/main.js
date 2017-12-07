$(document).ready (function(){
    /*Init tabs*/
    $(".tabs").lightTabs();

    $('.card__pw-hint').hover(function(){
        $('.card__hint-img').toggleClass('active');
        console.log('works');
    });

    $.validator.methods.name = function( value, element ) {
      return this.optional( element ) || /[a-zA-Z]+$/.test( value );
    }
});




/*Tabs Function*/
(function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);


// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='payment-card']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      card__number1: {
        required: true,
        number: true,
        minlength: 4,
        maxlength: 4,
      },
      card__number2: {
        required: true,
        number: true,
        minlength: 4,
        maxlength: 4,
      },
      card__number3: {
        required: true,
        number: true,
        minlength: 4,
        maxlength: 4,
      },
      card__number4: {
        required: true,
        number: true,
        minlength: 4,
        maxlength: 4,
      },
      card__date: "required",
      card__name: {
        required: true,
        minlength: 4,
        name: true,
        lettersonly: true
      },
      
      card_pw: {
        required: true,
        number: true,
        minlength: 3,
        maxlength: 3,
      }
    },
    // Specify validation error messages
    messages: {
      card__number1: "",
      card__number2: "",
      card__number3: "",
      card__number4: "",
      card__date: "",
      card__name: "",
      card_pw: ""      
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});