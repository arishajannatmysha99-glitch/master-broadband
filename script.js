/*==================================
 MASTER BROADBAND
 Premium Script.js
===================================*/

document.addEventListener("DOMContentLoaded", function () {

    /* Active Menu */

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", function () {

            links.forEach(item => item.classList.remove("active"));

            this.classList.add("active");

        });

    });

    /* Package Order Button */

    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const pack = this.parentElement.querySelector("h3").innerText;

            const phone = "8801404847201";

            const msg =
            `আসসালামু আলাইকুম,\nআমি ${pack} ইন্টারনেট প্যাকেজটি নিতে আগ্রহী।`;

            window.open(

                `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,

                "_blank"

            );

        });

    });

    /* Scroll Animation */

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.20

    });

    document.querySelectorAll(".card,.service-box").forEach(item=>{

        observer.observe(item);

    });

});

/* Sticky Header */

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#06358c";

header.style.transition=".3s";

}else{

header.style.background="rgba(10,45,120,.95)";

}

});

/* Back To Top Button */

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="100px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#0b4fc4";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.30)";
topBtn.style.zIndex="99999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* Console Message */

console.log("Master Broadband Premium Website Loaded Successfully");
