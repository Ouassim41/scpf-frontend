document.getElementById("forgotForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  try {
    const response = await fetch("https://scpf-backend.onrender.com/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById("message").innerText = data.message;
    } else {
      document.getElementById("message").innerText = data.message || "Erreur lors de l'envoi de l'email.";
    }
  } catch (error) {
    console.error("Erreur lors de la demande de réinitialisation :", error);
    document.getElementById("message").innerText = "Erreur serveur. Réessayez plus tard.";
  }
});
