var tl = gsap.timeline();

tl.to("#mainBodyLeft",{width: "40vw",duration:1,delay:2});
tl.to("#mainBodyRight",{width: "60vw",duration:1,delay:-1});
tl.from("#mainBodyLeftBottom",{opacity:0,duration:1});
tl.from("#mainBodyLeftTop",{y:'-100%',duration:1});
tl.to("#thisisCircle",{height:"25vh",width:"25vh",duration:1});
tl.from("#mainBodyLeftTopText",{y:"-100%",opacity:0,duration:1});
tl.from(".bigText,.smallText,#mainBodyRightBottomButton",{opacity:0,y:"-50%",duration:1,stagger:0.3});
tl.from("#mainBodyRightTopButton",{x:"130%",opacity:0,duration:1});

