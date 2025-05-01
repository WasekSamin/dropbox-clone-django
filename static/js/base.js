document.addEventListener("DOMContentLoaded", () => {
    setWebsiteTheme();
    refreshFlowbite();

    // Reinitialize after HTMX content swaps
    document.body.addEventListener('htmx:afterSwap', function (evt) {
        setWebsiteTheme();
        refreshFlowbite();
    });

    // Also handle back/forward navigation
    document.body.addEventListener('htmx:historyRestore', function (evt) {
        setWebsiteTheme();
        refreshFlowbite(); // ← This reinitializes dropdowns, tooltips, everything
    });
});

function setWebsiteTheme() {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme({ theme: "dark" });
    } else {
        setTheme({ theme: "light" });
    }
}

function refreshFlowbite() {
    if (typeof window.initFlowbite === 'function') {
        window.initFlowbite();
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

function getParentElement({el, className}) {
    if (el.classList.contains(className)) {
        return el;
    } else {
        return getParentElement({
            el: el.parentElement, className: className
        })
    }
}