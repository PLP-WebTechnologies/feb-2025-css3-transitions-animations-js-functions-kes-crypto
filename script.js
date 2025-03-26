document.addEventListener("DOMContentLoaded", function () {
    // Change text when button is clicked
    document.getElementById("change-text-btn").addEventListener("click", function () {
        document.getElementById("main-title").textContent = "Text Changed!";
    });

    // Form validation
    document.getElementById("register-form").addEventListener("submit", function (event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (name === "" || email === "" || password === "") {
            alert("Please fill in all required fields.");
            event.preventDefault();
        } else {
            localStorage.setItem("username", name);
            localStorage.setItem("email", email);
            alert("Registration Successful!");
        }
    });

    // Retrieve stored user preferences
    const storedName = localStorage.getItem("username");
    if (storedName) {
        document.getElementById("output").textContent = `Welcome back, ${storedName}!`;
    }
});
