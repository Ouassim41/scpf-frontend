document.getElementById("forgotForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  const response = await fetch("https://scpf-backend.onrender.com/api/forgot-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  const data = await response.json();
  document.getElementById("message").innerText = data.message;
});
