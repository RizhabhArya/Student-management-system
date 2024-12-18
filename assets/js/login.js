document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple hard-coded credentials (replace with real authentication in production)
    if (username === "admin" && password === "admin123") {
        sessionStorage.setItem("role", "admin"); // Save user role
        window.location.href = "admin/dashboard.html"; // Redirect to admin dashboard
    } else if (username === "student" && password === "student123") {
        sessionStorage.setItem("role", "student"); // Save user role
        window.location.href = "student/dashboard.html"; // Redirect to student dashboard
    } else {
        alert("Invalid credentials");
    }
});
