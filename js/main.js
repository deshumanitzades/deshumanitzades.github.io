// gsap.registerPlugin(ScrollTrigger);
//
// gsap.to(".panel:not(:last-child)", {
//   yPercent: -100,
//   ease: "none",
//   stagger: 0.5,
//   scrollTrigger: {
//     trigger: "#container",
//     start: "top top",
//     end: "+=300%",
//     scrub: true,
//     pin: true
//   }
// });
//
//
// gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});


//

//
// const tl = gsap
// .timeline()
// .to("#uno", {duration:3, xPercent:100})
// .to("#dos", {duration:1, yPercent:-100});
//
// gsap.registerPlugin(ScrollTrigger);
//
// ScrollTrigger.create({
//   animation: tl,
//   trigger: "#container",
//   start: "top top",
//   end: "+=100%",
//   scrub: true,
//   pin: true,
// });


// include Html blocks
// w3IncludeHTML();


// function onLoad(){
//   $( document ).ready(function() {
//     alert("loaded!");
//   });
// };
// onLoad();

// preloader

paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
        };

        Pace.on('done', function() {
        $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));
        $('#preloader').delay(1400).animate({top: '-125%'}, 2000, $.bez([0.19,1,0.22,1]));
        TweenMax.from("#first-scroll", 3, {
          delay: 0,
               y: "300px",
               ease: Expo.easeInOut
            })
       });


//MODAL VIDEO block
  var $videoSrc;
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });

  // console.log($videoSrc);

  // when the modal is opened autoplay it
  $('#myModal').on('shown.bs.modal', function (e) {

  // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
  $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
  })

  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('src',$videoSrc);
  })
//make navbar fixed
  function fixedNav() {
    $("#navbar").toggleClass("scrolled");
  }

 gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: "#introduction",
    start: "top top",
    end: "max",
    onToggle: () => fixedNav(),
  });

//change data on mobile
// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')
// const bsCollapse = new bootstrap.Collapse(menuToggle)
//
//
//
//   if ($(window).width() < 992) {
//     $('#navbar a').click(function() {
//         bsCollapse.toggle()
//     });
//   }


  // burguer button
  opened = false;
  window.onload = function() {
    var btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', onBtnClick)
  }

  function onBtnClick(e) {
    this.classList.toggle('opened');
  };

  $('#navbar a').click(function() {
         document.getElementsByTagName('button')[0].classList.toggle('opened');
    });


// INTRO
// gsap.from(".tag",{
//   yPercent: "+=200",
//   duration:2,
//   stagger: {
//     axys:1,
//     amount:2,
//     from:"start",
//     grid:"auto"
//   }
// });
var tl = gsap.timeline();

//animacio tags de irregularización
tl.from(".tag",{
  yPercent: "+=200",
  opacity: 0,
  rotation: -15,
  duration:.25,
  stagger: {
    axys:1,
    amount:1,
    from:"start",
    grid:"auto"
  }
});
ScrollTrigger.create({
  animation: tl,
  trigger: "#animated-block",
  start: "center bottom",
  end: "bottom bottom",
  scrub: true,
  pin: false,
  markers: false
});


var wall = gsap.timeline();
wall.to(".tag-wall-line",{
  xPercent: "-=25",
  duration: 1,
   ease: Power0.easeNone
})
wall.from(".tag-wall-line-inpar",{
  xPercent: "-=20",
  duration: 1,
   ease: Power0.easeNone
}, "<");
ScrollTrigger.create({
  animation: wall,
  anticipatePin: 1,
  trigger: "#animated-wall",
  start: "top 75%",
  end: "bottom 25%",
  scrub: 0.5,

});


// link to continued change
$("#link-continued").click(function(){
  $(this).addClass("d-none");
  $(this).prev().removeClass("closed");

  setTimeout(function() {
    ScrollTrigger.refresh()
  }, 350);

});

// collapsed button change

$(".collapsed-btn").click(function(){
  $(this).toggleClass("selected");

    setTimeout(function() {
      ScrollTrigger.refresh()
    }, 350);

});

//preload img
if (window.innerWidth < 576) {
  document.getElementById('preload-img').innerHTML = '<link rel="preload" as="image" href="img/1-640px.jpg"><link rel="preload" as="image" href="img/2-640px.jpg"><link rel="preload" as="image" href="img/3-640px.jpg"><link rel="preload" as="image" href="img/4-640px.jpg"><link rel="preload" as="image" href="img/5-640px.jpg"><link rel="preload" as="image" href="img/6-640px.jpg"><link rel="preload" as="image" href="img/7-640px.jpg"><link rel="preload" as="image" href="img/8-640px.jpg"><link rel="preload" as="image" href="img/9-640px.jpg"><link rel="preload" as="image" href="img/10-640px.jpg"><link rel="preload" as="image" href="img/11-640px.jpg">';
} else if (window.innerWidth > 576 && window.innerWidth < 992){
    document.getElementById('preload-img').innerHTML = '<link rel="preload" as="image" href="img/1-992px.jpg"><link rel="preload" as="image" href="img/2-992px.jpg"><link rel="preload" as="image" href="img/3-992px.jpg"><link rel="preload" as="image" href="img/4-992px.jpg"><link rel="preload" as="image" href="img/5-992px.jpg"><link rel="preload" as="image" href="img/6-992px.jpg"><link rel="preload" as="image" href="img/7-992px.jpg"><link rel="preload" as="image" href="img/8-992px.jpg"><link rel="preload" as="image" href="img/9-992px.jpg"><link rel="preload" as="image" href="img/10-992px.jpg"><link rel="preload" as="image" href="img/11-992px.jpg">';
} else if (window.innerWidth > 992 && window.innerWidth < 1440) {
    document.getElementById('preload-img').innerHTML = '<link rel="preload" as="image" href="img/1-1440px.jpg"><link rel="preload" as="image" href="img/2-1440px.jpg"><link rel="preload" as="image" href="img/3-1440px.jpg"><link rel="preload" as="image" href="img/4-1440px.jpg"><link rel="preload" as="image" href="img/5-1440px.jpg"><link rel="preload" as="image" href="img/6-1440px.jpg"><link rel="preload" as="image" href="img/7-1440px.jpg"><link rel="preload" as="image" href="img/8-1440px.jpg"><link rel="preload" as="image" href="img/9-1440px.jpg"><link rel="preload" as="image" href="img/10-1440px.jpg"><link rel="preload" as="image" href="img/11-1440px.jpg">';
} else {
      document.getElementById('preload-img').innerHTML = '<link rel="preload" as="image" href="img/1-1920px.jpg"><link rel="preload" as="image" href="img/2-1920px.jpg"><link rel="preload" as="image" href="img/3-1920px.jpg"><link rel="preload" as="image" href="img/4-1920px.jpg"><link rel="preload" as="image" href="img/5-1920px.jpg"><link rel="preload" as="image" href="img/6-1920px.jpg"><link rel="preload" as="image" href="img/7-1920px.jpg"><link rel="preload" as="image" href="img/8-1920px.jpg"><link rel="preload" as="image" href="img/9-1920px.jpg"><link rel="preload" as="image" href="img/10-1920px.jpg"><link rel="preload" as="image" href="img/11-1920px.jpg">';
};
