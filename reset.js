const params = new URLSearchParams(window.location.search);
const token = params.get("token");

document.getElementById("resetForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const password = document.getElementById("password").value;

  const response = await fetch("https://scpf-backend.onrender.com/api/reset-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, password })
  });

  const data = await response.json();
  document.getElementById("message").innerText = data.message;
});
