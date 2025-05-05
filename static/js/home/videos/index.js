function showVideoFilePreview(e) {
  e.stopPropagation();

  const videoEl = e.currentTarget.querySelector("video");
  if (videoEl) {
    const videoSrc = videoEl.querySelector("source")?.getAttribute("src");
    const modalBodyEl = document.getElementById("video__previewModal")?.querySelector(".modal__body");

    if (modalBodyEl && videoSrc) {
      modalBodyEl.innerHTML = `
                <video autoplay preload="auto" controls loading="lazy" class="w-full h-auto max-h-[400px] object-contain aspect-square">
                    <source src="${videoSrc}" />
                    Your browser does not support the video format!
                </video>
            `;
    }
  }
  createModalBackdrop();
  document.addEventListener("click", videoFilePreviewClickListener);
}

function videoFilePreviewClickListener(e) {
  if (e.target.closest("#video__previewModal .modal__content")) return;
  removeVideoElement();
}

function removeVideoElement() {
  const videoEl = document
    .getElementById("video__previewModal")
  ?.querySelector("video");
  videoEl?.remove();
  document.removeEventListener("click", videoFilePreviewClickListener);
}
