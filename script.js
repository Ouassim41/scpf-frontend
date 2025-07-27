document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  const response = await fetch("https://scpf-backend.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  
  if (response.ok) {
    document.getElementById("message").innerText = data.message;
    setTimeout(() => {
      window.location.href = "https://scpf.fr/espace-pro-page/bk/";
    }, 1000);
  } else {
    document.getElementById("message").innerText = data.message;
  }
});
