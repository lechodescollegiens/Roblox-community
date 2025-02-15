document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    
    if(username && email) {
        document.getElementById("message").textContent = "Merci pour votre inscription, " + username + " !";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Veuillez remplir tous les champs.";
        document.getElementById("message").style.color = "red";
    }
});
