function setUpEvents() {
    var buttons = document.querySelectorAll(".show-more");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var targetId = this.getAttribute("data-target");
            var content = document.getElementById(targetId);

            if (content) {
                content.classList.toggle("open");
                var buttonText = this.innerText;
                this.innerText = buttonText === "READ MORE" ? "READ LESS" : "READ MORE";
            }
        });
    });
}
window.onload = function () {
    setUpEvents();
};