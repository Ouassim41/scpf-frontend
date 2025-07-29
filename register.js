document.getElementById("registerForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://scpf-backend.onrender.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    document.getElementById("message").innerText = data.message;

    if (response.ok) {
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    }
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    document.getElementById("message").innerText = "Erreur serveur. Veuillez réessayer.";
  }
});
