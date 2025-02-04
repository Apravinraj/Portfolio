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
    const elements = document.querySelectorAll(".home-content, .profile-box, .cards > a div,contact-form,.hidden");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.2, 
        }
    );

    elements.forEach((el) => observer.observe(el));
});



