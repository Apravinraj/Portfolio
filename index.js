// mouse animation

const coords = {x: 0, y: 0};
const circles = document.querySelectorAll(".circle");

const colors = ["#1f005c", "#370769", "#4e1276", "#641d82", "#7a298f", "#90359b", "#a642a7", "#bd4fb3"];
circles.forEach(function(circle,index){
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors [index % colors.length];
});
window.addEventListener("mousemove", function(e){

   coords.x = e.clientX;
   coords.y = e.clientY;

  

  
   });


function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function(circle,index){
        circle.style.left = x-12 +"px";
        circle.style.top = y-12 +"px";

        circle.style.scale = (circles.length-index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x+=(nextCircle.x-x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

       
    });

    requestAnimationFrame(animateCircles);
   }
   animateCircles();



//darkmode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}

if(darkmode === "active") enableDarkmode()
   

themeSwitch.addEventListener("click",function(){
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})



document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    // Smooth Scroll
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight Active Nav Link on Scroll
    window.addEventListener("scroll", function () {
        let fromTop = window.scrollY;
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section && section.offsetTop <= fromTop + 100 && section.offsetTop + section.offsetHeight > fromTop) {
                navLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });

    // Reveal Elements on Scroll
    const elementsToReveal = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.2 }
    );

    elementsToReveal.forEach((el) => observer.observe(el));
});
