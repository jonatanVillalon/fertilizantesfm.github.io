const modal = document.querySelector("#simpleModal");


const modalBtn = document.querySelector("#btn-products");


const closeBtn = document.querySelector(".close-btn-modal");



modalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});
