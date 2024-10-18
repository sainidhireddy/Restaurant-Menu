cdocument.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("nav button");
    const menuItems = document.querySelectorAll(".menu-item");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            
            menuItems.forEach(item => {
                if (filter === "all" || item.getAttribute("data-category") === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
