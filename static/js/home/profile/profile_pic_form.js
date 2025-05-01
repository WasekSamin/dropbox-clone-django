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

function profilePicFileDragEnter(e) {
    e.preventDefault();
}

function profilePicFileDragOver(e) {
    e.preventDefault();
}

function profilePicFileDragLeave(e) {
    e.preventDefault();
}

function profilePicFileDrop(e) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const attachmentMainEl = getParentElement({
        el: e.target,
        className: "file__attachmentMainEl"
    });
    console.log(attachmentMainEl);
}

function profilePicFileChange(e) {
    const files = e.target.files;
    console.log(files);
}