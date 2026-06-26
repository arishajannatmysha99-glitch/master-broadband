// =========================
// Master Broadband Script
// =========================

// Live Network Status
function updateStatus() {
    const statusBox = document.getElementById("statusBox");

    if (!statusBox) return;

    if (navigator.onLine) {
        statusBox.innerHTML = "🟢 Your Site is Live";
        statusBox.style.background = "#d4f8d4";
        statusBox.style.color = "#0b8a2a";
    } else {
        statusBox.innerHTML = "🔴 No Internet Connection";
        statusBox.style.background = "#ffe0e0";
        statusBox.style.color = "#c40000";
    }
}

window.addEventListener("load", updateStatus);
window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);

// Header Shadow
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";
    }

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Card Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="all .6s ease";

observer.observe(card);

});

// Why Box Animation

const why = document.querySelectorAll(".why-box div");

why.forEach(box=>{

box.addEventListener("mouseenter",()=>{

box.style.transform="scale(1.08)";

box.style.transition=".3s";

});

box.addEventListener("mouseleave",()=>{

box.style.transform="scale(1)";

});

});

// Contact Form

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you for contacting Master Broadband!");

form.reset();

});

}

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.bottom="20px";

topBtn.style.left="20px";

topBtn.style.width="50px";

topBtn.style.height="50px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#003b8e";

topBtn.style.color="#fff";

topBtn.style.fontSize="22px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Console Message

console.log("Master Broadband Premium Website Loaded Successfully.");
