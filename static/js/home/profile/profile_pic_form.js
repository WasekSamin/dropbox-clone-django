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

    if (files.length > 0) {
        const file = files[0];
        const attachmentMainEl = getParentElement({
            el: e.target,
            className: "file__attachmentMainEl"
        });

        previewFileElement({
            file: file, attachmentMainEl: attachmentMainEl,
            isClearPreviousAttachment: true
        });
    }

}

function profilePicFileChange(e) {
    const files = e.target.files;

    if (files.length > 0) {
        const file = files[0];
        const attachmentMainEl = getParentElement({
            el: e.target,
            className: "file__attachmentMainEl"
        });

        previewFileElement({
            file: file, attachmentMainEl: attachmentMainEl,
            isClearPreviousAttachment: true
        });
    }
}

function previewFileElement({file: file, attachmentMainEl, isClearPreviousAttachment=false}) {
    if (isClearPreviousAttachment) {
        attachmentMainEl.querySelector(".attachment__previewEl")?.remove();
    }

    const attachmentPreviewEl = document.createElement("div");
    attachmentPreviewEl.classList.add("attachment__previewEl");
    attachmentPreviewEl.innerHTML = `
        <div class="w-[150px] h-[150px] bg-stone-100 dark:bg-stone-700 rounded-md relative">
            <div class="absolute right-1">
                <button onclick="removeAttachment(event)" type="button" class="text-base">
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
            </div>
            <img loading="lazy" src=${URL.createObjectURL(file)} class="w-full h-full rounded-md object-contain" alt=${file.name} />
        </div>
    `;

    attachmentMainEl.appendChild(attachmentPreviewEl);
}

function removeAttachment(e) {
    const previewEl = getParentElement({
        el: e.currentTarget,
        className: "attachment__previewEl"
    });

    previewEl?.remove();
}