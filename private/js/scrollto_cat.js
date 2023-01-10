//principal navbar

$("#nav-cap01").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#introduction" , offsetY:100}});
  $('#modalInfo').modal('hide')
});

$("#nav-cap02").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#cap02" , offsetY:10}});
  $('#modalInfo').modal('hide')
});

$("#nav-cap03").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#cap03" , offsetY:10}});
  $('#modalInfo').modal('hide')
});

$("#nav-cap04").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#cap04-ref" , offsetY:10}});
  $('#modalInfo').modal('hide')
});
//hero navbar

$("#nav-cap01-hero").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#introduction" , offsetY:100}});
  $('#modalInfo').modal('hide')
});

$("#nav-cap02-hero").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#cap02" , offsetY:10}});
  $('#modalInfo').modal('hide')
});

$("#nav-cap03-hero").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#cap03" , offsetY:10}});
  $('#modalInfo').modal('hide')
});

$("#nav-cap04-hero").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#cap04-ref" , offsetY:10}});
  $('#modalInfo').modal('hide')
});

$("#go-back-item").click(function(){
  setTimeout(function() {
    gsap.to(window, {duration: 0.5, scrollTo:{y:"#testimoni-dones" , offsetY:10}});
  }, 350);

});




//mobile svg
$("#btn-svg-01").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#call-susana-01" , offsetY:100}});
  $('#modalInfo').modal('hide')
});
$("#btn-svg-02").click(function(){

  gsap.to(window, {duration: 0.5, scrollTo:{y:"#head-cap02-03" , offsetY:100}});
  $('#modalInfo').modal('hide')
});
$("#btn-svg-05").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#head-cap03-03" , offsetY:100}});
  $('#modalInfo').modal('hide')
});

$("#btn-svg-06").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#head-cap02-03" , offsetY:100}});
  $('#modalInfo').modal('hide')
});
$("#btn-svg-04").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#head-cap03-02" , offsetY:100}});
  $('#modalInfo').modal('hide')
});

$("#btn-svg-03").click(function(){
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#head-cap03-01" , offsetY:100}});
  $('#modalInfo').modal('hide')
});
