function uploadFileDragEnter(e) {
    e.preventDefault();
}

function uploadFileDragOver(e) {
    e.preventDefault();
}

function uploadFileDragLeave(e) {
    e.preventDefault();
}

function uploadFileDrop(e) {
    e.preventDefault();
    const files = e.dataTransfer.files;

    for (let i=0; i<files.length; i++) {
        const attachmentMainEl = getParentElement({
            el: e.target,
            className: "file__attachmentMainEl"
        });

        previewFileElement({
            file: files[i], attachmentMainEl: attachmentMainEl
        });
    }
}

function uploadFileChange(e) {
    const files = e.target.files;

    if (files.length > 0) {
        for (let i=0; i<files.length; i++) {
            const attachmentMainEl = getParentElement({
                el: e.target,
                className: "file__attachmentMainEl"
            });

            previewFileElement({
                file: files[i], attachmentMainEl: attachmentMainEl
            });
        }
    }
}

function previewFileElement({file: file, attachmentMainEl, isClearPreviousAttachment=false}) {
    if (isClearPreviousAttachment) {
        attachmentMainEl.querySelector(".attachment__previewEl")?.remove();
    }

    const attachmentPreviewEl = document.createElement("div");
    attachmentPreviewEl.classList.add("attachment__previewEl");
    attachmentPreviewEl.innerHTML = `
        <div class="w-full py-2 px-3 rounded-md flex justify-between gap-x-3 bg-stone-200 dark:bg-stone-700">
            <a href="${URL.createObjectURL(file)}" target="_blank" class="flex items-center gap-x-2 break-all">
                <i class="fa-solid fa-file-lines text-xl"></i>
                <p>${file.name}</p>
            </a>
            <div>
                <button type="button" onclick="removeAttachment(event)" class="text-base">
                <i class="fa-solid fa-circle-xmark"></i>
                </button>
            </div>
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