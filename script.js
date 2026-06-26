function checkStatus() { 
  const status = document.getElementById("status"); 
  if (navigator.onLine) { 
    status.innerHTML = "🟢 Online - Network is Stable"; 
    status.style.color = "#00ff88"; 
  } else { 
    status.innerHTML = "🔴 Offline - Connection Lost"; 
    status.style.color = "red"; 
  } 
} 
window.addEventListener("online", checkStatus); 
window.addEventListener("offline", checkStatus); 
checkStatus();
