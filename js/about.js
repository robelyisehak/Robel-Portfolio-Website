document.getElementById("moreBtn").addEventListener("click", function () {
    var content = document.getElementById("moreContent");
    if (content.style.display === "none") {
        content.style.display = "block";
        this.textContent = "Less"; // Change button text to "Less" when content is shown
    } else {
        content.style.display = "none";
        this.textContent = "More"; // Change button text back to "More" when content is hidden
    }
});
