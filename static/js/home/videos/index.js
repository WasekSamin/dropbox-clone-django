function showVideoFilePreview(e) {
    createModalBackdrop();
    
    document.addEventListener("click", videoFilePreviewClickListener);
}

function videoFilePreviewClickListener(e) {
    alert(e.target);
    if (e.target.closest("#video__previewModal .modal__content")) return;
    document.removeEventListener("click", videoFilePreviewClickListener);
}