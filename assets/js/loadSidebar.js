// // loadSidebar.js
// document.addEventListener("DOMContentLoaded", () => {
//     fetch("sidebar.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("sidebar-container").innerHTML = data;
//         })
//         .catch(err => console.error("Error loading sidebar:", err));
// });


// document.addEventListener("DOMContentLoaded", () => {
//     fetch("../sidebar.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("sidebar-container").innerHTML = data;
//         })
//         .catch(err => console.error("Error loading sidebar:", err));
// });

document.addEventListener("DOMContentLoaded", () => {
    // Load Left Sidebar
    fetch("../sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
        })
        .catch(err => console.error("Error loading sidebar:", err));

    // Load Right Sidebar
    fetch("../right-sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("right-sidebar-container").innerHTML = data;
        })
        .catch(err => console.error("Error loading right sidebar:", err));
});


