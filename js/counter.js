var a = 0;
$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: parseInt($this.text().replace(".","").replace(",",""),10)
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            var num = Math.floor(this.countNum).toLocaleString().replace(",",".")
            $this.text(num);
          },
          complete: function() {
            $this.text(this.countNum.toLocaleString().replace(",",","));
            //alert('finished');
          }
        });
    });
    a = 1;
  }
});

var ab = 0;
$(window).scroll(function() {
  var oTop = $('#counter-two').offset().top - window.innerHeight;
  if (ab == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value-two').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count-two');
      $({
        countNum: parseInt($this.text().replace(".","").replace(",",""),10)
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            var num = Math.floor(this.countNum).toLocaleString().replace(",",".")
            $this.text(num);
          },
          complete: function() {
            $this.text(this.countNum.toLocaleString().replace(",",","));
            //alert('finished');
          }
        });
    });
    ab = 1;
  }
});

var abc = 0;
$(window).scroll(function() {
  var oTop = $('#counter-three').offset().top - window.innerHeight;
  if (abc == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value-three').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count-three');
      $({
        countNum: parseInt($this.text().replace(".","").replace(",",""),10)
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            var num = Math.floor(this.countNum).toLocaleString().replace(",",".")
            $this.text(num);
          },
          complete: function() {
            $this.text(this.countNum.toLocaleString().replace(",",","));
            //alert('finished');
          }
        });
    });
    abc = 1;
  }
});


var abcfour = 0;
$(window).scroll(function() {
  var oTop = $('#counter-four').offset().top - window.innerHeight;
  if (abcfour == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value-four').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count-four');
      $({
        countNum: parseInt($this.text().replace(".","").replace(",",""),10)
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            var num = Math.floor(this.countNum).toLocaleString().replace(",",".")
            $this.text(num);
          },
          complete: function() {
            $this.text(this.countNum.toLocaleString().replace(",",","));
            //alert('finished');
          }
        });
    });
    abcfour = 1;
  }
});

var abcd = 0;
$(window).scroll(function() {
  var oTop = $('#counter-five').offset().top - window.innerHeight;
  if (abcd == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value-five').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count-five');
      $({
        countNum: parseInt($this.text().replace(".","").replace(",",""),10)
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            var num = Math.floor(this.countNum).toLocaleString().replace(",",".")
            $this.text(num);
          },
          complete: function() {
            $this.text(this.countNum.toLocaleString().replace(",",","));
            //alert('finished');
          }
        });
    });
    abcd = 1;
  }
});

var abcde = 0;
$(window).scroll(function() {
  var oTop = $('#dones-counter-01').offset().top - window.innerHeight;
  if (abcde == 0 && $(window).scrollTop() > oTop) {
    $('.dones-counter-01').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count-six');
      $({
        countNum: parseInt($this.text().replace(".","").replace(",",""),10)
      }).animate({
          countNum: countTo
        },
        {
          duration: 8000,
          easing: 'swing',
          step: function() {
            var num = Math.floor(this.countNum).toLocaleString().replace(",",".")
            $this.text(num);
          },
          complete: function() {
            $this.text(this.countNum.toLocaleString().replace(",",","));
            //alert('finished');
          }
        });
    });
    abcde = 1;
  }
});

var abcdef = 0;
$(window).scroll(function() {
  var oTop = $('#dones-counter-02').offset().top - window.innerHeight;
  if (abcdef == 0 && $(window).scrollTop() > oTop) {
    $('.dones-counter-02').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count-seven');
      $({
        countNum: parseInt($this.text().replace(".","").replace(",",""),10)
      }).animate({
          countNum: countTo
        },
        {
          duration: 8000,
          easing: 'swing',
          step: function() {
            var num = Math.floor(this.countNum).toLocaleString().replace(",",".")
            $this.text(num);
          },
          complete: function() {
            $this.text(this.countNum.toLocaleString().replace(",",","));
            //alert('finished');
          }
        });
    });
    abcdef = 1;
  }
});

var abcdefg = 0;
$(window).scroll(function() {
  var oTop = $('#dones-counter-03').offset().top - window.innerHeight;
  if (abcdefg == 0 && $(window).scrollTop() > oTop) {
    $('.dones-counter-03').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count-eight');
      $({
        countNum: parseInt($this.text().replace(".","").replace(",",""),10)
      }).animate({
          countNum: countTo
        },
        {
          duration: 8000,
          easing: 'swing',
          step: function() {
            var num = Math.floor(this.countNum).toLocaleString().replace(",",".")
            $this.text(num);
          },
          complete: function() {
            $this.text(this.countNum.toLocaleString().replace(",",","));
            //alert('finished');
          }
        });
    });
    abcdefg = 1;
  }
});
