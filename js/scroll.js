// gsap.to("#img-portada", {
//   yPercent: 75,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#section-portada",
//     start: "top top",
//     end: "bottom top",
//     scrub: true
//   },
// });
gsap.to("#capsula01", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: "#img01",
    start: "300px bottom", // the default values
    end: "115% top",
    scrub: true,
    markers:false
  },
});
gsap.to("#capsula02", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: "#img02",
    start: "300px bottom", // the default values
    end: "115% top",
    scrub: true,
    markers:false
  },
});
gsap.to("#capsula03", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: "#img03",
    start: "300px bottom", // the default values
    end: "115% top",
    scrub: true,
  },
});
gsap.to("#capsula04", {
  yPercent: 45,
  ease: "none",
  scrollTrigger: {
    trigger: "#img04",
    start: "300px bottom", // the default values
    end: "115% top",
    scrub: true,
    markers:false
  },
});
gsap.to("#capsula05", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: "#img05",
    start: "300px bottom", // the default values
    end: "115% top",
    scrub: true,
    markers:false
  },
});

// testimonis
function showSvg() {
  $("#svgBox").toggleClass("show");
};
function showSvg02() {
  $("#svgBox02").toggleClass("show");
};
function callSusana01() {
  $("#test-susana-01").toggleClass("appeared");
};
function callGabi01() {
  $("#test-gabi-01").toggleClass("appeared");
};
function callGabi02() {
  $("#test-gabi-02").toggleClass("appeared");
};
function callVictoria01() {
  $("#test-victoria-01").toggleClass("appeared");
};
function callEli01() {
  $("#test-eli-01").toggleClass("appeared");
};
function callAnaisabel01() {
  $("#test-anaisabel-01").toggleClass("appeared");
};
function callLiza01() {
  $("#test-liza-01").toggleClass("appeared");
};
function callLiza02() {
  $("#test-liza-02").toggleClass("appeared");
};
function callCarlos01() {
  $("#test-carlos-01").toggleClass("appeared");
};
function callJuandiego01() {
  $("#test-juandiego-01").toggleClass("appeared");
};
function showBtn01() {
  $("#info-btn").toggleClass("show");
};
function showBtn02() {
  $("#info-btn-02").toggleClass("show");
};




if ($(window).width() < 576) {
  ScrollTrigger.create({
    trigger: "#ref-cap03",
    start: "top top",
    end: "bottom 10%",
    onToggle: () => showBtn01(),
    markers:false
  });
  ScrollTrigger.create({
    trigger: "#ref-cap04",
    start: "top top",
    end: "bottom 10%",
    onToggle: () => showBtn02(),
    markers:false
  });
};
if ($(window).width() > 576 && $(window).width() < 992 ) {
  ScrollTrigger.create({
    trigger: "#ref-cap03",
    start: "top 20%",
    end: "bottom 80%",
    onToggle: () => showSvg(),
    markers:false
  });
  ScrollTrigger.create({
    trigger: "#ref-cap04",
    start: "top 20%",
    end: "bottom 80%",
    onToggle: () => showSvg02(),
    markers:false
  });
  ScrollTrigger.create({
    trigger: "#call-gabi-01",
    start: "top 80%",
    end: "top 50%",
    onToggle: () => callGabi01(),
  });
  ScrollTrigger.create({
    trigger: "#call-gabi-02",
    start: "top 80%",
    end: "top 50%",
    onToggle: () => callGabi02(),
  });
  ScrollTrigger.create({
    trigger: "#call-susana-01",
    start: "top 75%",
    end: "top 50%",
    onToggle: () => callSusana01(),
  });
  ScrollTrigger.create({
    trigger: "#call-victoria-01",
    start: "top 75%",
    end: "top 50%",
    onToggle: () => callVictoria01(),
  });
  ScrollTrigger.create({
    trigger: "#call-eli-01",
    start: "top 75%",
    end: "top 50%",
    onToggle: () => callEli01(),
  });
  ScrollTrigger.create({
    trigger: "#call-anaisabel-01",
    start: "top 75%",
    end: "top 50%",
    onToggle: () => callAnaisabel01(),
  });
  ScrollTrigger.create({
    trigger: "#call-liza-01",
    start: "top 75%",
    end: "top 50%",
    onToggle: () => callLiza01(),
  });
  ScrollTrigger.create({
    trigger: "#call-liza-02",
    start: "top 75%",
    end: "top 50%",
    onToggle: () => callLiza02(),
  });
  ScrollTrigger.create({
    trigger: "#call-carlos-01",
    start: "top 75%",
    end: "top 50%",
    onToggle: () => callCarlos01(),
  });
  ScrollTrigger.create({
    trigger: "#call-juandiego-01",
    start: "top 75%",
    end: "top 50%",
    onToggle: () => callJuandiego01(),
  });
} else {
  ScrollTrigger.create({
    trigger: "#ref-cap03",
    start: "top top",
    end: "bottom bottom",
    onToggle: () => showSvg(),
    markers:false
  });
  ScrollTrigger.create({
    trigger: "#ref-cap04",
    start: "top top",
    end: "bottom bottom",
    onToggle: () => showSvg02(),
    markers:false
  });
  ScrollTrigger.create({
    trigger: "#call-susana-01",
    start: "top 55%",
    end: "top 15%",
    onToggle: () => callSusana01(),
  });
  ScrollTrigger.create({
    trigger: "#call-gabi-01",
    start: "top 55%",
    end: "top 15%",
    onToggle: () => callGabi01(),
    markers: false
  });
  ScrollTrigger.create({
    trigger: "#call-gabi-02",
    start: "top 55%",
    end: "top 15%",
    onToggle: () => callGabi02(),
  });
  ScrollTrigger.create({
    trigger: "#call-victoria-01",
    start: "top 55%",
    end: "top 15%",
    onToggle: () => callVictoria01(),
  });
  ScrollTrigger.create({
    trigger: "#call-eli-01",
    start: "top 50%",
    end: "top 15%",
    onToggle: () => callEli01(),
  });
  ScrollTrigger.create({
    trigger: "#call-anaisabel-01",
    start: "top 55%",
    end: "top 15%",
    onToggle: () => callAnaisabel01(),
  });
  ScrollTrigger.create({
    trigger: "#call-liza-01",
    start: "top 55%",
    end: "top 15%",
    onToggle: () => callLiza01(),
  });
  ScrollTrigger.create({
    trigger: "#call-liza-02",
    start: "top 55%",
    end: "top 15%",
    onToggle: () => callLiza02(),
  });
  ScrollTrigger.create({
    trigger: "#call-carlos-01",
    start: "top 55%",
    end: "top 15%",
    onToggle: () => callCarlos01(),
  });
  ScrollTrigger.create({
    trigger: "#call-juandiego-01",
    start: "top 55%",
    end: "top 15%",
    onToggle: () => callJuandiego01(),
  });
};
