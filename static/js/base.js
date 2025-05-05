document.addEventListener("DOMContentLoaded", () => {
    setWebsiteThemeOnLoad();

    // Drag & drop on body
    // document.body.addEventListener("dragenter", (e) => {
    //     e.preventDefault();
    // });
    // document.body.addEventListener("dragover", (e) => {
    //     e.preventDefault();
    // });
    // document.body.addEventListener("dragleave", (e) => {
    //     e.preventDefault();
    // });
    // document.body.addEventListener("drop", (e) => {
    //     e.preventDefault();

    //     console.log(e.currentTarget);

    //     const files = e.dataTransfer.files;
    //     console.log(files);
    // });
});

function setWebsiteThemeOnLoad() {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme({ theme: "dark" });
    } else {
        setTheme({ theme: "light" });
    }
}

function setTheme({ theme }) {
    const themeBtns = document.querySelectorAll(".theme__btn");

    if (theme === "dark") {
        document.documentElement.classList.add('dark');
        localStorage.setItem("color-theme", "dark");

        themeBtns.forEach(btnEl => {
            btnEl.innerHTML = `<i class="fa-regular fa-sun"></i>`;
        })
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("color-theme", "light");

        themeBtns.forEach(btnEl => {
            btnEl.innerHTML = `<i class="fa-regular fa-moon"></i>`;
        })
    }
}

function getParentElement({ el, className }) {
    if (el.classList.contains(className)) {
        return el;
    } else {
        return getParentElement({
            el: el.parentElement, className: className
        })
    }
}

// Applying class on modal backdrop
function createModalBackdrop() {
    setTimeout(() => {
        const modalBackdrop = document.querySelector(".fixed.inset-0.z-40");

        if (modalBackdrop) {
            modalBackdrop.classList.add("modal__backdrop");
        }
    }, 50);
}

// Drag & drop on folder
function folderDragEnter(e) {
    e.preventDefault();
}
function folderDragLeave(e) {
    e.preventDefault();
}
function folderDragOver(e) {
    e.preventDefault();
}
function folderDrop(e) {
    e.preventDefault();

    console.log(e.currentTarget);
    const files = e.dataTransfer.files;
    console.log(files);
}