document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#menu li").forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation();

            let submenu = this.querySelector(".submenu");

            if (submenu) {
                this.classList.toggle("expanded");
            } else {
                alert("Вы можете перейти по ссылке: " + this.textContent);
            }
        });
    });
});