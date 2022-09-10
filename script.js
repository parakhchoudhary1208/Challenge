gsap.to("#bottel img", {
    scrollTrigger: {
        trigger: "#main-1",
        start: "bottom bottom",
        end: "bottom top",
        scrub: .1,
    },
    rotate: -25,
    ease: "Circ.easeOut",
});

gsap.to("#bottel img", {
    scrollTrigger: {
        trigger: "#main-4",
        start: "bottom bottom",
        end: "bottom top",
        scrub: .1,
    },
    scale: 0.4,
    duration: 1,
    ease: "Circ.easeOut",
});

gsap.to(".bottels", {
    scrollTrigger: {
        trigger: "#main-5",
        start: "bottom bottom",
        end: "bottom 30%",
        pin: true,
        scrub: .1,
    },
    y: -100,
    stagger: 1,
    duration: 1.5,
    opacity: 0,
    ease: "Circ.easeOut",
});

var arr = [
    {base: "ABV", variety: "ALCOHOL BY VOLUME", quantity: "5%", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit esse laudantium enim iste excepturi nemo officia ut?"},
    {base: "IBU", variety: "INTERNATIONAL BITTERNESS UNIT", quantity: "51", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit esse laudantium enim iste excepturi nemo officia ut?"},
    {base: "OG", variety: "ORIGINAL GRAVITY", quantity: "1.5", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit esse laudantium enim iste excepturi nemo officia ut?"}
];

var clutter = "";

arr.forEach(function(val){
    clutter +=`<div id="indigrents">
    <h4>${val.base}</h4>
    <h3>${val.variety}</h3>
    <div id="line"></div>
    <div id="quantity">
       <h4>${val.quantity}</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit esse laudantium enim iste excepturi nemo officia ut?</p>
    </div>
</div>`
})

document.querySelector("#right").innerHTML=clutter;
