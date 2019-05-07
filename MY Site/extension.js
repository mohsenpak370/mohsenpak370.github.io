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
    let i = 0;
    let x;
    function change(id){
    if(i===0) {
       i++; id=document.getElementsByClassName ("section");
       id[0].style.backgroundColor = "#fefefe";
       id[1].style.backgroundColor = "#fefefe";
       id[2].style.backgroundColor = "#fefefe";
       id=document.getElementById("contacts").style.backgroundColor = "#fefefe";
       id=document.getElementsByTagName ("body")[0].style.backgroundColor = "hsla(240, 100%, 95%, 1)";

    id=document.getElementsByClassName("section");
       id[0].style.color = "hsla(240, 90%, 25%, 1)";
       id[1].style.color = "hsla(240, 90%, 25%, 1)";
       id[2].style.color = "hsla(240, 90%, 25%, 1)";
       id=document.getElementById("contacts").style.color = "hsla(240, 90%, 25%, 1)";

    } else {
       i--; id=document.getElementsByClassName("section");
       id[0].style.backgroundColor = "#333";
       id[1].style.backgroundColor = "#333";
       id[2].style.backgroundColor = "#333";
       id=document.getElementById("contacts").style.backgroundColor = "#333";
       id=document.getElementsByTagName ("body")[0].style.backgroundColor = "hsla(240, 0%, 14%, 1)";

    id=document.getElementsByClassName("section");
    id[0].style.color = "#FFF";
    id[1].style.color = "#FFF";
    id[2].style.color = "#FFF";
    id=document.getElementById("contacts").style.color = "#fff";
    }
    }
