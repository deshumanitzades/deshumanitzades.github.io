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
//make navbar fixed

// function onLoad(){
//   $( document ).ready(function() {
//     alert("loaded!");
//   });
// };
// onLoad();

 gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: "#introduction",
    start: "top top",
    end: "max",
    onToggle: () => fixedNav(),
  });

  // burguer button
  opened = false;
  window.onload = function() {
    var btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', onBtnClick)
  }

  function onBtnClick(e) {
    this.classList.toggle('opened');
  }

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
  markers: true
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
