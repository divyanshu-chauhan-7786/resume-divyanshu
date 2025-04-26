
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        const validUsername = "divyanshu";
        const validPassword = "7123";

        if (username === validUsername && password === validPassword) {
            alert("Login successful!");
            window.location.href = "portfolio.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
