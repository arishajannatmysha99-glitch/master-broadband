‎/*====================================
‎MASTER BROADBAND NETWORK
‎Premium Website V3
‎script.js - Part 1
‎====================================*/
‎
‎/*=========================
‎Sticky Header
‎=========================*/
‎
‎window.addEventListener("scroll", function () {
‎
‎const header = document.getElementById("header");
‎
‎if (window.scrollY > 80) {
‎
‎header.classList.add("sticky");
‎
‎} else {
‎
‎header.classList.remove("sticky");
‎
‎}
‎
‎});
‎
‎/*=========================
‎Smooth Scroll
‎=========================*/
‎
‎document.querySelectorAll('a[href^="#"]').forEach(anchor => {
‎
‎anchor.addEventListener("click", function (e) {
‎
‎e.preventDefault();
‎
‎const target = document.querySelector(this.getAttribute("href"));
‎
‎if (target) {
‎
‎target.scrollIntoView({
‎
‎behavior: "smooth"
‎
‎});
‎
‎}
‎
‎});
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
‎"🟢 Network Performance Excellent"
‎
‎];
‎
‎let statusIndex = 0;
‎
‎setInterval(() => {
‎
‎statusIndex++;
‎
‎if (statusIndex >= statusList.length) {
‎
‎statusIndex = 0;
‎
‎}
‎
‎statusBox.innerHTML = statusList[statusIndex];
‎
‎}, 4000);
‎
‎/*=========================
‎Fade Animation
‎=========================*/
‎
‎const observer = new IntersectionObserver((entries) => {
‎
‎entries.forEach((entry) => {
‎
‎if (entry.isIntersecting) {
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
‎".about,.packages,.why-us,.statistics,.coverage,.notice,.reviews,.faq,.contact"
‎
‎).forEach((el) => {
‎
‎observer.observe(el);
‎
‎});
‎
‎/*=========================
‎Console Message
‎=========================*/
‎
‎console.log(
‎
‎"Master Broadband Network Website Loaded Successfully"
‎
‎);
‎/*====================================
‎script.js - Part 2
‎====================================*/
‎
‎/*=========================
‎Animated Counter
‎=========================*/
‎
‎const counters = document.querySelectorAll(".stat-box h2");
‎
‎const counterObserver = new IntersectionObserver((entries) => {
‎
‎entries.forEach((entry) => {
‎
‎if (!entry.isIntersecting) return;
‎
‎const counter = entry.target;
‎const targetText = counter.innerText;
‎
‎const target = parseFloat(targetText.replace(/[^0-9.]/g, "")) || 0;
‎const suffix = targetText.replace(/[0-9.]/g, "");
‎
‎let count = 0;
‎const speed = target / 100 || 1;
‎
‎const updateCounter = () => {
‎
‎count += speed;
‎
‎if (count < target) {
‎
‎counter.innerText = Math.floor(count) + suffix;
‎
‎requestAnimationFrame(updateCounter);
‎
‎} else {
‎
‎counter.innerText = targetText;
‎
‎}
‎
‎};
‎
‎updateCounter();
‎
‎counterObserver.unobserve(counter);
‎
‎});
‎
‎});
‎
‎counters.forEach((counter) => {
‎
‎counterObserver.observe(counter);
‎
‎});
‎
‎/*=========================
‎Back To Top Button
‎=========================*/
‎
‎const topBtn = document.createElement("button");
‎
‎topBtn.innerHTML = "↑";
‎
‎topBtn.id = "topButton";
‎
‎document.body.appendChild(topBtn);
‎
‎topBtn.style.cssText = `
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
‎box-shadow:0 8px 20px rgba(0,0,0,.2);
‎`;
‎
‎window.addEventListener("scroll", () => {
‎
‎if (window.scrollY > 300) {
‎
‎topBtn.style.display = "block";
‎
‎} else {
‎
‎topBtn.style.display = "none";
‎
‎}
‎
‎});
‎
‎topBtn.addEventListener("click", () => {
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
‎Contact Form Validation
‎=========================*/
‎
‎const form = document.querySelector("form");
‎
‎if(form){
‎
‎form.addEventListener("submit",(e)=>{
‎
‎e.preventDefault();
‎
‎alert("Thank you! Your message has been received.");
‎
‎form.reset();
‎
‎});
‎
‎}
‎
‎/*=========================
‎Package Hover Effect
‎=========================*/
‎
‎document.querySelectorAll(".package-card").forEach((card)=>{
‎
‎card.addEventListener("mouseenter",()=>{
‎
‎card.style.transform="translateY(-15px) scale(1.03)";
‎
‎});
‎
‎card.addEventListener("mouseleave",()=>{
‎
‎card.style.transform="";
‎
‎});
‎
‎});
‎
‎/*=========================
‎Page Loaded
‎=========================*/
‎
‎window.addEventListener("load",()=>{
‎
‎document.body.style.opacity="1";
‎
‎console.log("Website Ready");
‎
‎});
‎/*====================================
‎script.js - Part 3 (Final)
‎====================================*/
‎
‎/*=========================
‎Review Auto Highlight
‎=========================*/
‎
‎const reviews = document.querySelectorAll(".review-card");
‎
‎let reviewIndex = 0;
‎
‎function highlightReview(){
‎
‎reviews.forEach((review)=>{
‎
‎review.classList.remove("active-review");
‎
‎});
‎
‎if(reviews.length>0){
‎
‎reviews[reviewIndex].classList.add("active-review");
‎
‎reviewIndex++;
‎
‎if(reviewIndex>=reviews.length){
‎
‎reviewIndex=0;
‎
‎}
‎
‎}
‎
‎}
‎
‎setInterval(highlightReview,3000);
‎
‎highlightReview();
‎
‎/*=========================
‎Notice Animation
‎=========================*/
‎
‎const noticeBox=document.querySelector(".notice-box");
‎
‎if(noticeBox){
‎
‎let opacity=1;
‎
‎setInterval(()=>{
‎
‎opacity=(opacity===1)?0.7:1;
‎
‎noticeBox.style.opacity=opacity;
‎
‎},1000);
‎
‎}
‎
‎/*=========================
‎Hero Button Animation
‎=========================*/
‎
‎const heroButtons=document.querySelectorAll(".hero-buttons a");
‎
‎heroButtons.forEach((btn)=>{
‎
‎btn.addEventListener("mouseenter",()=>{
‎
‎btn.style.transform="scale(1.08)";
‎
‎});
‎
‎btn.addEventListener("mouseleave",()=>{
‎
‎btn.style.transform="scale(1)";
‎
‎});
‎
‎});
‎
‎/*=========================
‎Scroll Progress Bar
‎=========================*/
‎
‎const progress=document.createElement("div");
‎
‎progress.id="scrollProgress";
‎
‎progress.style.cssText=`
‎position:fixed;
‎top:0;
‎left:0;
‎height:4px;
‎width:0%;
‎background:#25D366;
‎z-index:99999;
‎transition:width .2s linear;
‎`;
‎
‎document.body.appendChild(progress);
‎
‎window.addEventListener("scroll",()=>{
‎
‎const totalHeight=document.documentElement.scrollHeight-window.innerHeight;
‎
‎const progressWidth=(window.pageYOffset/totalHeight)*100;
‎
‎progress.style.width=progressWidth+"%";
‎
‎});
‎
‎/*=========================
‎Image Hover Effect
‎=========================*/
‎
‎document.querySelectorAll("img").forEach((img)=>{
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
‎Footer Year
‎=========================*/
‎
‎const footer=document.querySelector("footer");
‎
‎if(footer){
‎
‎const year=new Date().getFullYear();
‎
‎footer.innerHTML=footer.innerHTML.replace("2026",year);
‎
‎}
‎
‎/*=========================
‎Developer Console
‎=========================*/
‎
‎console.log("%cMASTER BROADBAND NETWORK",
‎"color:#0057d9;font-size:22px;font-weight:bold;");
‎
‎console.log("%cWebsite Version : Premium V3",
‎"color:green;font-size:14px;");
‎
‎console.log("%cStatus : Running Successfully",
‎"color:#ff9800;font-size:14px;");
‎
‎console.log("%cDeveloped with ❤️",
‎"color:red;font-size:14px;");
‎
‎/*=========================
‎End of File
‎=========================*/
‎
