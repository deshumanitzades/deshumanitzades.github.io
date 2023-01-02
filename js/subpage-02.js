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

// paceOptions = {
//         ajax: true,
//         document: true,
//         eventLag: false
//         };
//
//         Pace.on('done', function() {
//         $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));
//         $('#preloader').delay(1400).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));
//
//
//         TweenMax.from("#first-scroll", 3, {
//           delay: 0,
//                y: "300px",
//                ease: Expo.easeInOut
//             })
//        });


//MODAL VIDEO block
  var $videoSrc;
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });

  console.log($videoSrc);

  // when the modal is opened autoplay it
  $('#myModal').on('shown.bs.modal', function (e) {

  // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
  $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
  })

  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('src',$videoSrc);
  });

  //scroll parallax
  gsap.to("#capsula06", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: "#img06",
      start: "300px bottom", // the default values
      end: "115% top",
      scrub: true,
      markers:false
    },
  });

  // testimonions
  function callAna01() {
    $("#test-ana-01").toggleClass("appeared");
  };
  function callRodrigo01() {
    $("#test-rodrigo-01").toggleClass("appeared");
  };
  if ($(window).width() > 576 && $(window).width() < 992 ) {

    ScrollTrigger.create({
      trigger: "#call-rodrigo-01",
      start: "top 75%",
      end: "top 50%",
      onToggle: () => callRodrigo01(),
    });
  } else {
    ScrollTrigger.create({
      trigger: "#call-ana-01",
      start: "top 75%",
      end: "top 25%",
      onToggle: () => callAna01(),
    });

  };

  //make sub-nav visible
    function visibleNav() {
      $("#sub-nav").toggleClass("visible");
    }

   gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: "#ref-cap",
      start: "top top",
      end: "bottom top",
      onToggle: () => visibleNav(),
    });

    //change close onBtnClick//make navbar fixed
      function changeBtn() {
        $("#goBackBtn").toggleClass("modified");
      }

     gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: "#ref-cap",
        start: "top top",
        end: "bottom top",
        onToggle: () => changeBtn(),
      });
