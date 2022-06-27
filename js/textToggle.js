$('#text-green')
    .data('textToggle', "!@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n !@#W$9876543210?!abc;:+=-,._ \n ")
    .hover(function (e) {
        var that = $(this);
        
        // get the text from data attribute
        var textToSet = that.data('textToggle');
        
        // save the current text so it can be reverted
        that.data('textToggle', that.text());
        
        // set the new text
        that.text(textToSet);
    }, function (e) {
        var that = $(this);
        
        // get the text from data attribute
        var textToSet = that.data('textToggle');
        
        // save the current text so it can be reverted
        that.data('textToggle', that.text());
        
        // set the new text
        that.text(textToSet);
    });

var breakpoint = false;

$(window).scroll(function() {
  if ($(this).scrollTop() > 800 && !breakpoint ) {
     doStuff();
  }
})

function doStuff() {
  breakpoint = true;
  alert("hola!");
  window.location.href = "./script.html"
}