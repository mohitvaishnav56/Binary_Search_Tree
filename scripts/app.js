document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");

    // Initialize GSAP timeline
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Animate the root node (center node)
    tl.from(".node:nth-child(1)", {
        scale: 0,
        duration: 1,
        ease: "bounce.out"
    });

    // Animate the left branch
    tl.from(".branch-right", {
        scaleY: 0,
        duration: 0.8,
        transformOrigin: "top",
        ease: "power3.out"
    }, "-=0.5"); // Slight overlap with the root node

    // Animate the left child node
    tl.from(".row .node:nth-child(1)", {
        scale: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.3"); // Slight overlap with branch-left

    // Animate the right branch
    tl.from(".branch-left", {
        scaleY: 0,
        duration: 0.8,
        transformOrigin: "top",
        ease: "power3.out"
    }, "-=0.7"); // Slight overlap with left child animation

    // Animate the right child node
    tl.from(".row .node:nth-child(2)", {
        scale: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.5"); // Slight overlap with branch-right

    // Add a pulsating effect to all nodes after they appear
    tl.to(".node", {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut"
    }, "+=0.2");

    setTimeout(() => {
        loader.style.display = "none";
        const localTl = gsap.timeline();
        localTl.from("main", {
            y: "100%",
            opacity: 0,
            duration: 1
        });
        localTl.from(".popup", {
            scale: 0,
            opacity: 0.5,
            ease: "back.out(1.7)",
        });
    }, 8000);

    let Tree = {
        root: null,
    }
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", event => {
            event.preventDefault();
        });
    });
});
