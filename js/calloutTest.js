var popup = document.getElementById('popup');
var arrow = document.getElementById('arrow');
var square = document.getElementById('square');
var title = document.getElementById('popupTitle');
var content = document.getElementById('calloutContentWrapper');

$("#popupWrapper").each(function(index, element){
  var tl = new TimelineLite({paused:true});
  tl.to(title, .1, {display:"none"})
    .to(popup, .3, {
        transformOrigin:"0% 50%",
        ease:Power4.easeInOut,
        scaleX:3.7,
        scaleY:3.8,
        // borderRadius: "1px",
        backgroundColor:"white"
    })
    .to(arrow, .3, {
        ease:Power4.easeInOut,
        borderRightColor:"white"

    }, "-=0.3")
    .to(square, .3, {
        ease:Power4.easeInOut,
        backgroundColor:"white"
    }, "-=0.3")
    .to(content, .1, {
      ease:Power1.EaseIn,
      display:"inline"
    }, "-=0.1");
  element.animation = tl;
});

$("#popupWrapper").hover(over, out);
function over(){ this.animation.play() };
function out(){ this.animation.reverse() };

var popup2 = document.getElementById('popup2');
var arrow2 = document.getElementById('arrow2');
var square2 = document.getElementById('square2');
var title2 = document.getElementById('popupTitle2');
var content2 = document.getElementById('calloutContentWrapper2');

$("#popupWrapper2").each(function(index, element){
  var tl = new TimelineLite({paused:true});
  tl.to(title2, .1, {display:"none"})
    .to(popup2, .3, {
      transformOrigin:"50% 100%",
          ease:Power4.easeInOut,
          scaleX:3.7,
          scaleY:3.8,
          // borderRadius: "1px",
          zIndex: 1000,
          backgroundColor:"white"
    })
    .to(arrow2, .3, {
        ease:Power4.easeInOut,
        borderTopColor:"white",
        zIndex: 1001
    }, "-=0.3")
    .to(square2, .3, {
        ease:Power4.easeInOut,
        backgroundColor:"white",
        zIndex: 1002
    }, "-=0.3")
    .to(content2, .1, {
      ease:Power1.EaseIn,
      display:"inline",
      zIndex: 1003
    }, "-=0.1");
  element.animation = tl;
});

$("#popupWrapper2").hover(over, out);
function over(){ this.animation.play() };
function out(){ this.animation.reverse() };

var popup3 = document.getElementById('popup3');
var arrow3= document.getElementById('arrow3');
var square3 = document.getElementById('square3');
var title3 = document.getElementById('popupTitle3');
var content3 = document.getElementById('calloutContentWrapper3');

$("#popupWrapper3").each(function(index, element){
  var tl = new TimelineLite({paused:true});
  tl.to(title3, .1, {display:"none"})
    .to(popup3, .3, {
      transformOrigin:"50% 100%",
          ease:Power4.easeInOut,
          scaleX:3.7,
          scaleY:3.8,
          // borderRadius: "1px",
          // bottom: "-4%",
          backgroundColor:"white"
    })
    .to(arrow3, .3, {
        ease:Power4.easeInOut,
        borderTopColor:"white"
    }, "-=0.3")
    .to(square3, .3, {
        ease:Power4.easeInOut,
        backgroundColor:"white"
    }, "-=0.3")
    .to(content3, .1, {
        ease:Power1.EaseIn,
        display:"inline"
    }, "-=0.1");
  element.animation = tl;
});

$("#popupWrapper3").hover(over, out);
function over(){ this.animation.play() };
function out(){ this.animation.reverse() };

var popup4 = document.getElementById('popup4');
var arrow4= document.getElementById('arrow4');
var square4 = document.getElementById('square4');
var title4 = document.getElementById('popupTitle4');
var content4 = document.getElementById('calloutContentWrapper4');

$("#popupWrapper4").each(function(index, element){
  var tl = new TimelineLite({paused:true});
  tl.to(title4, .1, {display:"none"})
    .to(popup4, .3, {
      transformOrigin:"50% 100%",
          ease:Power4.easeInOut,
          scaleX:3.7,
          scaleY:3.8,
          // borderRadius: "1px",
          bottom: "-3px",
          backgroundColor:"white"
    })
    .to(arrow4, .3, {
        ease:Power4.easeInOut,
        borderTopColor:"white",
        zIndex: 1000
    }, "-=0.3")
    .to(square4, .3, {
        ease:Power4.easeInOut,
        backgroundColor:"white",
        zIndex: 1000
    }, "-=0.3")
    .to(content4, .1, {
        ease:Power1.easeIn,
        display:"inline",
        zIndex: 1002
    }, "-=0.1");
  element.animation = tl;
});

$("#popupWrapper4").hover(over, out);
function over(){ this.animation.play() };
function out(){ this.animation.reverse() };

var popup5 = document.getElementById('popup5');
var arrow5 = document.getElementById('arrow5');
var square5 = document.getElementById('square5');
var title5 = document.getElementById('popupTitle5');
var content5 = document.getElementById('calloutContentWrapper5');

$("#popupWrapper5").each(function(index, element){
  var tl = new TimelineLite({paused:true});
  tl.to(title5, .1, {display:"none"})
    .to(popup5, .3, {
      transformOrigin:"50% 100%",
          ease:Power4.easeInOut,
          scaleX:3.7,
          scaleY:3.8,
          // borderRadius: "1px",
          backgroundColor:"white"
    })
    .to(arrow5, .3, {
        ease:Power4.easeInOut,
        borderTopColor:"white",
        zIndex: 1002
    }, "-=0.3")
    .to(square5, .3, {
        ease:Power4.easeInOut,
        backgroundColor:"white",
        zIndex: 1002
    }, "-=0.3")
    .to(content5, .1, {
        ease:Power1.EaseIn,
        display:"inline",
        zIndex: 1003
    }, "-=0.1");
  element.animation = tl;
});

$("#popupWrapper5").hover(over, out);
function over(){ this.animation.play() };
function out(){ this.animation.reverse() };

var popup6 = document.getElementById('popup6');
var arrow6 = document.getElementById('arrow6');
var square6 = document.getElementById('square6');
var title6 = document.getElementById('popupTitle6');
var content6 = document.getElementById('calloutContentWrapper6');

$("#popupWrapper6").each(function(index, element){
  var tl = new TimelineLite({paused:true});
  tl.to(title6, .1, {display:"none"})
    .to(popup6, .3, {
      transformOrigin:"50% 100%",
          ease:Power4.easeInOut,
          scaleX:3.7,
          scaleY:3.8,
          // borderRadius: "1px",
          bottom: "-3px",
          backgroundColor:"white"
    })
    .to(arrow6, .3, {
        ease:Power4.easeInOut,
        borderTopColor:"white",
        zIndex: 1002
    }, "-=0.3")
    .to(square6, .3, {
        ease:Power4.easeInOut,
        backgroundColor:"white",
        zIndex: 1002
    }, "-=0.3")
    .to(content6, .1, {
        ease:Power1.EaseIn,
        display:"inline"
    }, "-=0.1");
  element.animation = tl;
});

$("#popupWrapper6").hover(over, out);
function over(){ this.animation.play() };
function out(){ this.animation.reverse() };

var popup7 = document.getElementById('popup7');
var arrow7 = document.getElementById('arrow7');
var square7 = document.getElementById('square7');
var title7 = document.getElementById('popupTitle7');
var content7 = document.getElementById('calloutContentWrapper7');

$("#popupWrapper7").each(function(index, element){
  var tl = new TimelineLite({paused:true});
  tl.to(title7, .1, {display:"none"})
    .to(popup7, .3, {
      transformOrigin:"50% 100%",
          ease:Power4.easeInOut,
          scaleX:3.7,
          scaleY:3.8,
          // borderRadius: "1px",
          backgroundColor:"white"
    })
    .to(arrow7, .3, {
        ease:Power4.easeInOut,
        borderTopColor:"white",
        zIndex: 1002
    }, "-=0.3")
    .to(square7, .3, {
        ease:Power4.easeInOut,
        backgroundColor:"white",
        zIndex: 1002
    }, "-=0.3")
    .to(content7, .1, {
        ease:Power1.EaseIn,
        display:"inline"
    }, "-=0.1");
  element.animation = tl;
});

$("#popupWrapper7").hover(over, out);
function over(){ this.animation.play() };
function out(){ this.animation.reverse() };
