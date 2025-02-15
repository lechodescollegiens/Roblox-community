document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if (name && email) {
        message.style.color = "green";
        message.innerHTML = "✅ Inscription réussie, bienvenue " + name + " !";
    } else {
        message.style.color = "red";
        message.innerHTML = "❌ Veuillez remplir tous les champs.";
    }
});
