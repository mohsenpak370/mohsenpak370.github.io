var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0 solid #fff}";
        document.body.appendChild(css);
    };
    // ***** Nightmode *****
    $(function(){
var isOn = 1;

$(".switch").click(function () {
    if (isOn) {
        $(".handle").css("transform","translateX(20px)");
        $(".handle").css("background-color", "yellow");
        $(".switch").css("background-color","#46A0F6");
        $("body").css("background-color","hsla(240, 100%, 99%, 1)");
        $(".section").css({"backgroundColor": "hsla(240, 20%, 100%, 1)", "color": "hsla(240, 90%, 55%, 1)"});
        $("#contacts").css({"backgroundColor": "hsla(240, 20%, 100%, 1)", "color": "hsla(240, 90%, 55%, 1)"});
        $(".circle").removeClass("selectedd");
        isOn = 0;
    }else{
        $(".handle").css("transform","translateX(0px)");
        $(".switch").css("background-color","#4D30AE");
        $(".handle").css("background-color", "white");
        $("body").css("background-color","hsla(240, 0%, 14%, 1)");
        $(".section").css({"backgroundColor": "hsla(240, 0%, 25%, 1)", "color": "hsla(240, 100%, 99%, 1)"});
        $("#contacts").css({"backgroundColor": "hsla(240, 0%, 25%, 1)", "color": "hsla(240, 100%, 99%, 1)"});
        $(".circle").addClass("selectedd");
        isOn = 1;
    }
});

});
