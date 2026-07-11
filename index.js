document.addEventListener("DOMContentLoaded", function () {
    gsap.from("nav", { opacity: 0, y: 100, duration: 3, ease: "power2.out" });
    gsap.from(".content", { opacity: 0, x: -200, duration: 3, delay: 0.5, ease: "power2.out" });
});

// GreenSock Animated Platform

function loginpage() {
    window.location.href = 'login.html'; // Opens in the same tab
}

function signuppage() {
    window.location.href = 'signup.html'; // Opens in the same tab
}
