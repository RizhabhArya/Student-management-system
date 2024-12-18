document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("aside a");

    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(t => t.classList.remove("text-blue-500"));
            e.target.classList.add("text-blue-500");
        });
    });
});
