document.addEventListener("DOMContentLoaded", () => {
    // Load sidebar
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
        })
        .catch(err => console.error("Error loading sidebar:", err));

    // Highlight active sidebar link
    const tabs = document.querySelectorAll("aside a");

    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(t => t.classList.remove("text-blue-500"));
            e.target.classList.add("text-blue-500");
        });
    });
});
