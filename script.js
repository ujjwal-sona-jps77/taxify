const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.from("#ques1" , {
    x: -70,
    opacity: 0
})

gsap.to("nav" , {
    scrollTrigger: {
        trigger: "nav", 
        scroller: "body",
        start: "top -15%",
        scrub: 2
    }, 
    backgroundColor: "rgba(189, 189, 189, 0.836)",
    height: "8vh"
});

gsap.from("#tax_det" , {
    x: -70,
    duration: 1,
    opacity: 0,
    delay: .3
})

gsap.from(".why_tax" , {
    x: 70,
    delay: 1,
    opacity: 0,
    duration: 1.1
});

gsap.from(".page2" , {
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 60%",
        scrub: 2,
        end: "top 61%"
    },
    x: -70,
    opacity: 0
})

function menu_anime(){
    let menu_open = document.querySelector("#menu");
    let menu_close = document.querySelector("#close");
    let menu = document.querySelector(".menu_in")

    menu_open.addEventListener("click" , function(){
        menu_open.style.display = "none";
        menu.style.left = "0";
    });
    menu_close.addEventListener("click" , function(){
        menu.style.left = "-80%";
        menu_open.style.display = "block";
    })
};

menu_anime()