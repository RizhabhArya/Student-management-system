document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");
  
    if (logoutBtn) {
      logoutBtn.addEventListener("click", async () => {
        try {
          const response = await fetch("/logout", {
            method: "GET",
          });
  
          if (response.ok) {
            alert("You have been logged out successfully.");
            window.location.href = "login.html"; // Redirect to login page
          } else {
            alert("Error logging out.");
          }
        } catch (error) {
          console.error("Error during logout:", error);
          alert("An error occurred.");
        }
      });
    }
  });
  
