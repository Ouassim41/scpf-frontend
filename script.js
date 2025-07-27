document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://scpf-backend.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById("message").innerText = data.message;

      setTimeout(() => {
        window.location.href = "https://scpf.fr/espace-pro-page/bk/";
      }, 1000);
    } else {
      document.getElementById("message").innerText = data.message || "Échec de la connexion.";
    }
  } catch (error) {
    console.error("Erreur de connexion :", error);
    document.getElementById("message").innerText = "Erreur serveur. Réessayez plus tard.";
  }
});
