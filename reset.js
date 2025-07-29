const params = new URLSearchParams(window.location.search);
const token = params.get("token");

document.getElementById("resetForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://scpf-backend.onrender.com/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token, password })
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById("message").innerText = data.message;
      // Redirection ou indication après succès
    } else {
      document.getElementById("message").innerText = data.message || "Erreur lors de la réinitialisation.";
    }
  } catch (error) {
    console.error("Erreur serveur :", error);
    document.getElementById("message").innerText = "Une erreur est survenue. Réessayez plus tard.";
  }
});
