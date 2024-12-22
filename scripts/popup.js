let popupCont = document.querySelector(".popup");
let close = document.querySelector("#popup-close");

close.addEventListener("click", () => {
    gsap.to(popupCont, {
        scale: 0,
        display : "none",
        ease: "power4.inOut"
    })
});


