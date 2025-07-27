document.getElementById("registerForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("https://scpf-backend.onrender.com/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  document.getElementById("message").innerText = data.message;

  if (response.ok) {
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  }
});
