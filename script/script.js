let icon = document.querySelector('#icon');
let menu = document.querySelector('.menu');


document.addEventListener('DOMContentLoaded',() =>{
    let tl = new TimelineMax();
    tl.fromTo('.loader',.1,{width:'100%'},
    {width:'0%',delay:6,ease:Expo.EaseIn}
    );
    tl.fromTo('header',0.4,{height:'0',opacity:0},
    {height:'100%',delay:.2,opacity:1,ease:Expo.EaseIn}
    );
    tl.fromTo('.video-main',0.2,{width:'0%',opacity:0},
    {width:'100%',delay:0.2,opacity:1,ease:Expo.EaseIn}
    );

    tl.fromTo('.main-text',0.3,{top:"-1880px"},
    {top:"0",delay:0.2,ease:Expo.EaseIn});

    tl.fromTo('.welcome',0.1,{bottom:"-40px"},
    {bottom:"15px",delay:0.4,ease:Expo.EaseIn}
    )
});


icon.addEventListener('click',() =>{
    menu.classList.toggle('show-menu');
});
