gsap.to("#el-01-sombra", {
  scale: 3,
  duration: 1,
  transformOrigin: "center center",
  repeat: -1,
  yoyo: true
});

var tl00 = gsap.timeline({scrollTrigger:{
	trigger:"#ref-cap03",
	toggleActions:"play complete reverse reset",
  start: "top top"
  }
})
.timeScale(1.5);

tl00.to("#el-01-sombra", {
  scale: 3,
  duration: 1,
  transformOrigin: "center center",
  repeat: -1,
  yoyo: true,
});
tl00.from("#lin-01", {
  attr: {x2:7.4},
  duration: .5,
  ease: "sine.inOut"
},"<");

tl00.to("#info-text-00",{
  opacity: 1,
  yPercent: -25
});

var tl01 = gsap.timeline({scrollTrigger:{
	trigger:"#head-cap02-03",
	toggleActions:"play complete reverse reset"
  }})
  .timeScale(1.5);

  tl01.to("#el-01-sombra", {
    opacity: 0,
    duration: .5,
  });
  tl01.from("#lin-rec-01", {
    attr: {y2:80},
    duration: .4,
    ease: "sine.inOut"
  });
  tl01.from("#el-02", {
    transformOrigin: "center center",
    scale:0,
    duration: .5,
    ease: "sine.inOut"
  }),"<";
  tl01.from("#el-02-sombra", {
    transformOrigin: "center center",
    scale:0,
    duration: .5,
  });
  tl01.from("#lin-rec-02", {
    attr: {y2:240},
    duration: 1.5,
    ease: "sine.inOut"
  });
  tl01.to("#el-02-sombra", {
    scale: 3,
    duration: 1,
    transformOrigin: "center center",
    repeat: -1,
    yoyo: true,
  }, "<");
  tl01.from("#lin-02", {
    attr: {x2:14.9},
    duration: .75,
    ease: "sine.inOut"
  },"<");
  tl01.to("#info-text-01",{
    opacity: 1,
    yPercent: -25
  },"<");
  tl01.from("#el-03", {
    transformOrigin: "center center",
    scale:0,
    duration: .5,
    ease: "sine.inOut"
  }),"<";
  tl01.to("#el-03-sombra", {
    scale: 3,
    duration: 1,
    transformOrigin: "center center",
    repeat: -1,
    yoyo: true,
  }, "<");
  tl01.from("#lin-03", {
    attr: {x2:14.9},
    duration: .75,
    ease: "sine.inOut"
  },"<");
  tl01.to("#info-text-05",{
    opacity: 1,
    yPercent: -25
  });
  tl01.from("#temp-text-01",{
    opacity: 0,
  });

var tl02 = gsap.timeline({scrollTrigger:{
	trigger:"#call-carlos-01",
  start:"top 25%",
	toggleActions:"play complete reverse reset",
  }})
  .timeScale(1.55);

  tl02.from("#lin-rec-03", {
    attr: {x2:14.9},
    duration: 1,
    ease: "sine.inOut"
  });
  tl02.from("#el-04", {
    transformOrigin: "center center",
    scale:0,
    duration: .5,
    ease: "sine.inOut"
  }),"<";
  tl02.from("#el-04-sombra", {
    transformOrigin: "center center",
    scale:0,
    duration: .5,
    ease: "sine.inOut"
  }),"<";
  tl02.to("#el-04-sombra", {
    scale: 3,
    duration: 1,
    transformOrigin: "center center",
    repeat: -1,
    yoyo: true,
  }, "<");

  tl02.from("#lin-04", {
    attr: {x2:14.9},
    duration: .75,
    ease: "sine.inOut"
  },"<");
  tl02.to("#info-text-02",{
    opacity: 1,
    yPercent: -25
  });
  tl02.from("#lin-04-marge", {
    attr: {y2:400},
    duration: 1,
    ease: "sine.inOut"
  });
  tl02.from("#temp-text-03",{
    opacity: 0,
  });

var tl03 = gsap.timeline({scrollTrigger:{
	trigger:"#head-cap03-02",
	toggleActions:"play complete reverse reset",
  }})
  .timeScale(1.5);

  tl03.to("#moved-container", {
    transformOrigin: "left top",
    scale: 1,
  });
  tl03.to("#info-text-03", {
    opacity: 1,
    yPercent: -25
  });

var tl04 = gsap.timeline({scrollTrigger:{
	trigger:"#head-cap03-03",
	toggleActions:"play complete reverse reset",
  }})
  .timeScale(1.5);

  tl04.to("#el-04-sombra", {
    opacity:0,
    duration: .5,
  });
  tl04.from("#lin-rec-04", {
    attr: {y2:400},
    duration: 1.5,
    ease: "sine.inOut"
  },"<");
  tl04.from("#el-05", {
    transformOrigin: "center center",
    scale:0,
    duration: .5,
    ease: "sine.inOut"
  });
  tl04.from("#el-05-sombra", {
    transformOrigin: "center center",
    scale:0,
    duration: .5,
    ease: "sine.inOut"
  }),"<";
  tl04.to("#el-05-sombra", {
    scale: 3,
    duration: 1,
    transformOrigin: "center center",
    repeat: -1,
    yoyo: true,
  }, "<");
  tl04.from("#lin-05", {
    attr: {x2:45},
    duration: .75,
    ease: "sine.inOut"
  },"<");
  tl04.to("#info-text-04", {
    opacity: 1,
    yPercent: -25
  });
  tl04.from("#aceptado", {
    transformOrigin: "center center",
    scale:0,
    duration: .5,
    ease: "sine.inOut"
  }), "<";
  tl04.from("#denegado", {
    transformOrigin: "center center",
    scale:0,
    duration: .5,
    ease: "sine.inOut"
  }), "<";
  tl04.from("#lin-rec-05", {
    attr: {y2:754.9},
    duration: .5,
    ease: "sine.inOut"
  });
  tl04.from("#lin-rec-06", {
    attr: {x2:44.9},
    duration: 1,
    ease: "sine.inOut"
  });
  tl04.from("#temp-text-02",{
    opacity: 0,
  });




// controls
