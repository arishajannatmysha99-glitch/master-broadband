‎/*=================================================
‎MASTER BROADBAND NETWORK
‎Premium Website V4
‎script.js - Part 1
‎=================================================*/
‎
‎/*=========================
‎Sticky Header
‎=========================*/
‎
‎const header = document.getElementById("header");
‎
‎window.addEventListener("scroll", () => {
‎
‎    if (window.scrollY > 80) {
‎
‎        header.classList.add("sticky");
‎
‎    } else {
‎
‎        header.classList.remove("sticky");
‎
‎    }
‎
‎});
‎
‎/*=========================
‎Smooth Scroll
‎=========================*/
‎
‎document.querySelectorAll('a[href^="#"]').forEach(anchor => {
‎
‎    anchor.addEventListener("click", function(e){
‎
‎        e.preventDefault();
‎
‎        const target = document.querySelector(this.getAttribute("href"));
‎
‎        if(target){
‎
‎            target.scrollIntoView({
‎
‎                behavior:"smooth"
‎
‎            });
‎
‎        }
‎
‎    });
‎
‎});
‎
‎/*=========================
‎Network Status
‎=========================*/
‎
‎const statusBox = document.getElementById("statusBox");
‎
‎const statusList = [
‎
‎"🟢 All Services Running Normally",
‎
‎"🟢 Fiber Network Stable",
‎
‎"🟢 Customer Support Online",
‎
‎"🟢 High Speed Internet Active",
‎
‎"🟢 Welcome To Master Broadband"
‎
‎];
‎
‎let statusIndex = 0;
‎
‎setInterval(()=>{
‎
‎statusIndex++;
‎
‎if(statusIndex >= statusList.length){
‎
‎statusIndex = 0;
‎
‎}
‎
‎if(statusBox){
‎
‎statusBox.innerHTML = statusList[statusIndex];
‎
‎}
‎
‎},4000);
‎
‎/*=========================
‎Fade Animation
‎=========================*/
‎
‎const observer = new IntersectionObserver((entries)=>{
‎
‎entries.forEach((entry)=>{
‎
‎if(entry.isIntersecting){
‎
‎entry.target.classList.add("show");
‎
‎}
‎
‎});
‎
‎});
‎
‎document.querySelectorAll(
‎
‎".about,.packages,.why,.statistics,.coverage,.notice,.reviews,.faq,.contact"
‎
‎).forEach((section)=>{
‎
‎section.classList.add("fade-up");
‎
‎observer.observe(section);
‎
‎});
‎
‎/*=========================
‎Console Message
‎=========================*/
‎
‎console.log("Master Broadband Network V4 Loaded Successfully");
‎/*=================================================
‎MASTER BROADBAND NETWORK
‎Premium Website V4
‎script.js - Part 2
‎=================================================*/
‎
‎/*=========================
‎Counter Animation
‎=========================*/
‎
‎const counters = document.querySelectorAll(".stat-box h2");
‎
‎const counterObserver = new IntersectionObserver((entries)=>{
‎
‎entries.forEach((entry)=>{
‎
‎if(!entry.isIntersecting) return;
‎
‎const counter = entry.target;
‎
‎const target = parseInt(counter.getAttribute("data-count")) || 0;
‎
‎let count = 0;
‎
‎const speed = Math.max(1, Math.ceil(target / 100));
‎
‎function updateCounter(){
‎
‎count += speed;
‎
‎if(count < target){
‎
‎counter.innerText = count + "+";
‎
‎requestAnimationFrame(updateCounter);
‎
‎}else{
‎
‎counter.innerText = target + "+";
‎
‎}
‎
‎}
‎
‎updateCounter();
‎
‎counterObserver.unobserve(counter);
‎
‎});
‎
‎});
‎
‎counters.forEach((counter)=>{
‎
‎counterObserver.observe(counter);
‎
‎});
‎
‎/*=========================
‎Back To Top Button
‎=========================*/
‎
‎const topButton = document.createElement("button");
‎
‎topButton.id = "topButton";
‎
‎topButton.innerHTML = "↑";
‎
‎document.body.appendChild(topButton);
‎
‎topButton.style.cssText = `
‎position:fixed;
‎left:20px;
‎bottom:20px;
‎width:55px;
‎height:55px;
‎border:none;
‎border-radius:50%;
‎background:#0057d9;
‎color:#fff;
‎font-size:24px;
‎cursor:pointer;
‎display:none;
‎z-index:9999;
‎box-shadow:0 10px 20px rgba(0,0,0,.2);
‎transition:.3s;
‎`;
‎
‎window.addEventListener("scroll",()=>{
‎
‎if(window.scrollY>300){
‎
‎topButton.style.display="block";
‎
‎}else{
‎
‎topButton.style.display="none";
‎
‎}
‎
‎});
‎
‎topButton.addEventListener("click",()=>{
‎
‎window.scrollTo({
‎
‎top:0,
‎
‎behavior:"smooth"
‎
‎});
‎
‎});
‎
‎/*=========================
‎Contact Form
‎=========================*/
‎
‎const contactForm = document.querySelector(".contact-form");
‎
‎if(contactForm){
‎
‎contactForm.addEventListener("submit",(e)=>{
‎
‎e.preventDefault();
‎
‎alert("✅ Thank you for contacting Master Broadband!");
‎
‎contactForm.reset();
‎
‎});
‎
‎}
‎
‎/*=========================
‎Package Card Effect
‎=========================*/
‎
‎document.querySelectorAll(".package-card").forEach((card)=>{
‎
‎card.addEventListener("mouseenter",()=>{
‎
‎card.style.transform="translateY(-12px) scale(1.03)";
‎
‎});
‎
‎card.addEventListener("mouseleave",()=>{
‎
‎card.style.transform="translateY(0) scale(1)";
‎
‎});
‎
‎});
‎
‎/*=========================
‎Hero Button Animation
‎=========================*/
‎
‎document.querySelectorAll(".hero-buttons a").forEach((btn)=>
‎/*=================================================
‎MASTER BROADBAND NETWORK
‎Premium Website V4
‎script.js - Part 3 (Final)
‎=================================================*/
‎
‎/*=========================
‎Scroll Progress Bar
‎=========================*/
‎
‎const progressBar = document.createElement("div");
‎
‎progressBar.id = "scroll-progress";
‎
‎progressBar.style.cssText = `
‎position:fixed;
‎top:0;
‎left:0;
‎width:0%;
‎height:4px;
‎background:#25D366;
‎z-index:99999;
‎transition:width .2s linear;
‎`;
‎
‎document.body.appendChild(progressBar);
‎
‎window.addEventListener("scroll",()=>{
‎
‎const scrollTop = document.documentElement.scrollTop;
‎
‎const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
‎
‎const percent = (scrollTop / scrollHeight) * 100;
‎
‎progressBar.style.width = percent + "%";
‎
‎});
‎
‎/*=========================
‎Review Highlight
‎=========================*/
‎
‎const reviewCards = document.querySelectorAll(".review-card");
‎
‎let review = 0;
‎
‎function reviewAnimation(){
‎
‎reviewCards.forEach(card=>{
‎
‎card.classList.remove("active-review");
‎
‎});
‎
‎if(reviewCards.length){
‎
‎reviewCards[review].classList.add("active-review");
‎
‎review++;
‎
‎if(review >= reviewCards.length){
‎
‎review = 0;
‎
‎}
‎
‎}
‎
‎}
‎
‎setInterval(reviewAnimation,3000);
‎
‎reviewAnimation();
‎
‎/*=========================
‎Image Hover Animation
‎=========================*/
‎
‎document.querySelectorAll("img").forEach(img=>{
‎
‎img.addEventListener("mouseenter",()=>{
‎
‎img.style.transition=".3s";
‎
‎img.style.transform="scale(1.05)";
‎
‎});
‎
‎img.addEventListener("mouseleave",()=>{
‎
‎img.style.transform="scale(1)";
‎
‎});
‎
‎});
‎
‎/*=========================
‎Footer Copyright Year
‎=========================*/
‎
‎const footer = document.querySelector("footer");
‎
‎if(footer){
‎
‎footer.innerHTML = footer.innerHTML.replace("2026",new Date().getFullYear());
‎
‎}
‎
‎/*=========================
‎Console Branding
‎=========================*/
‎
‎console.log("%cMASTER BROADBAND NETWORK",
‎"font-size:24px;color:#0057d9;font-weight:bold;");
‎
‎console.log("%cFast • Reliable • Connected",
‎"font-size:16px;color:#25D366;");
‎
‎console.log("%cWebsite Version : V4 Premium",
‎"font-size:14px;color:#ff9800;");
‎
‎/*=========================
‎Website Loaded
‎=========================*/
‎
‎window.addEventListener("load",()=>{
‎
‎console.log("Master Broadband Website Loaded Successfully.");
‎
‎});
‎
‎/*=========================
‎End of File
‎=========================*/
‎
