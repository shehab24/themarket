$(".owl-carousel").owlCarousel({
    loop: false,
    smartSpeed: 300,
    margin:10,
    stagePadding:20,
    dots:false,
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 6,
      },
      1000: {
        items: 4,
      },
    },
  });

$(".inspair_slider").owlCarousel({
    loop: false,
    smartSpeed: 300,
    margin:10,
    stagePadding:0,
    dots:false,
    nav:false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 6,
      },
      1000: {
        items: 4,
      },
    },
  });


 
  var swiper = new Swiper('.swiper-container', {
 slidesPerView:"auto",
 spaceBetween:30,
 centeredSlides:true,
 grabCursor:true,
 loop:true,
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
  });

 


  var toggle_btn=document.querySelector("#toggle_btn");
  var hide_btn=document.querySelector("#hide_btn");
  var side_nav=document.querySelector(".side_nav");
  var body=document.querySelector("body");
  toggle_btn.addEventListener("click",function(){
side_nav.classList.add("active");
body.classList.add("active");
  });

  hide_btn.addEventListener("click",function(){
side_nav.classList.remove("active");
body.classList.remove("active");
  });

  var mobile_toggle_btn=document.querySelector("#mobile_toggle_btn");
  var mobile_hide_btn=document.querySelector("#mobile_hide_btn");
  var mobile_side_nav=document.querySelector(".mobile_side_nav");
  var body=document.querySelector("body");

  mobile_toggle_btn.addEventListener("click",function(){
    mobile_side_nav.classList.add("active");
body.classList.add("active");
  });

  mobile_hide_btn.addEventListener("click",function(){
    mobile_side_nav.classList.remove("active");
body.classList.remove("active");
  });

  // function bottom_menu_fixed(){
  //   var mobile_bottom_menu_section=document.querySelector(".mobile_bottom_menu_section");
  //   mobile_bottom_menu_section.classList.add("active");
  // }

  var li = document.querySelectorAll(".bottom_fixed_ul li");
  var mobile_bottom_menu_section=document.querySelector(".mobile_bottom_menu_section");
  var story =document.querySelector(".strois_full_box");
  var category_full_tabs =document.querySelector(".category_full_tabs");
for(var i= 0 ; i<li.length;i++){
   li[i].addEventListener("click",function(){
    var attr= this.getAttribute("data-name");
  if(attr=="menu"){
    mobile_bottom_menu_section.classList.add("active");
    category_full_tabs.classList.remove("active");
    story.classList.remove("active");
  }else if(attr=="cata"){
    category_full_tabs.classList.add("active");
    story.classList.remove("active");
  }else{
    mobile_bottom_menu_section.classList.remove("active");
    category_full_tabs.classList.remove("active");
    story.classList.remove("active");
  }
    

   })
}

  var sub_li = document.querySelectorAll(".submenu_cata_ul li");
 
for(var i= 0 ; i<sub_li.length;i++){
   sub_li[i].addEventListener("click",function(){
    this.classList.toggle("active");

   })
}


function show_story(){
  var story =document.querySelector(".strois_full_box");
  story.classList.add("active");
}
function hide_stroies(){
  var story =document.querySelector(".strois_full_box");
  story.classList.remove("active");
}



var story_cata_li = document.querySelectorAll(".story_cata  ul li");
var show_div = document.querySelectorAll(".story_product");
for(var i= 0 ; i<story_cata_li.length;i++){
  story_cata_li[i].addEventListener("click",function(){
    var attr= this.getAttribute("data-name");
    //  li.forEach(function(new_li){
    //    new_li.classList.remove("active");
    //  })
  //    this.classList.add("active");
  //  
   show_div.forEach(function(item){
       item.classList.remove("active");
   })
   if(attr=="all"){
       var item=document.querySelector("." + attr);
       item.classList.add("active");
   }else if(attr=="a"){
    var item=document.querySelector("." + attr);
       item.classList.add("active");
   }else if(attr=="b"){
    var item=document.querySelector("." + attr);
    item.classList.add("active");
   }else if(attr=="c"){
    var item=document.querySelector("." + attr);
    item.classList.add("active");
   }

   
     
   
 })
}