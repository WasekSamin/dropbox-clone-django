const profilePicFormModal = document.getElementById("profile__picFormModal");

// Applying class on modal backdrop
function editPhotoClick(event) {
    setTimeout(() => {
        const modalBackdrop = document.querySelector(".fixed.inset-0.z-40");

        if (modalBackdrop) {
            modalBackdrop.classList.add("modal__backdrop");
        }
    }, 50);
}