// Load header and footer dynamically
document.addEventListener("DOMContentLoaded", function() {
    fetch("includes/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });

    fetch("includes/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});

