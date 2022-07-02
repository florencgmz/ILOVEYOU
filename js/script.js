setInterval(function(){
    $("html, body").animate({ scrollTop: $(document).height() }, 35000);
    navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
}, 500);

(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this),
                str = $ele.text(),
                progress = 0;
            $ele.text('');
            var timer = setInterval(function() {
                $ele.text(str.substring(0, progress++) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) clearInterval(timer);
            }, 100);
        });
        return this;
    };
})(jQuery);

$("#typewriter").typewriter();