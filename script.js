let endh = document.querySelector('.endh');
let btn1 = document.querySelector('.btn1');
let cursor = document.querySelector('.cursor');
let menudiv = document.querySelectorAll('.menudiv')
let stringendh = "DESIGNER"
let a = "";
for (let i = 0;i<stringendh.length;i++){
    setTimeout(()=>{
        a = a + stringendh[i]
        endh.textContent = a
    },i*100)
}

document.body.addEventListener('mousemove',(e)=>{
    cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`
    
})
let navbar = document.querySelector('.navbar');
let side_design = document.querySelector('.side-design')
let txtbtn = document.querySelector('.txtbtn')
window.addEventListener('scroll',()=>{
    if (window.scrollY > 110) {
        navbar.style.backgroundColor = "white"
        side_design.style.top = "-100vh"
        endh.style.left = "100vw"
    }else if(window.scrollY < 110){
        navbar.style.backgroundColor = "transparent"
        side_design.style.top = "0vh"
        endh.style.left = "0vw"
    }
    if (window.scrollY > 240) {
        txtbtn.style.position = "fixed"
        txtbtn.style.top = "14vh"
        
        navbar.style.backgroundColor = "transparent"
        navbar.style.color = "white"
        menudiv.forEach((e)=>{
            e.style.backgroundColor = "white"
        });
    }else if (window.scrollY < 240) {
        txtbtn.style.position = "relative"
        txtbtn.style.top = "0px"
        navbar.style.color = "black"
        navbar.style.backgroundColor = "transparent"
        menudiv.forEach((e)=>{
            e.style.backgroundColor = "black"
        });
    }
    if(window.scrollY > 888){
        txtbtn.style.position = "relative"
        txtbtn.style.top = "0px"
    }
})


let intdp = document.querySelector('#intdp');
let inth1 = document.querySelector('#inth1');
let intdetailsp = "I’m an enthusiastic learner on a mission to master JavaScript and React.js, building a strong foundation in modern web development. With a keen eye for problem-solving and a passion for creating efficient, scalable, and user-friendly applications, I am constantly exploring new technologies, best practices, and industry insights to sharpen my skills";
let b = "";
let hasAnimated = false;
function intdetails() {
    if (window.scrollY > 700 && !hasAnimated) {
        inth1.style.animation="typing 1s steps(15, end) forwards"
        inth1.style.display = "flex"
        hasAnimated = true; 
        let i = 0;
        function typeEffect() {
            if (i < intdetailsp.length) {
                b += intdetailsp[i];
                intdp.textContent = b;
                i++;
                setTimeout(typeEffect, 5);
            }
        }
        typeEffect();
    }
}

window.addEventListener('scroll', intdetails)
