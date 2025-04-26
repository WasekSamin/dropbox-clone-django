document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme({theme: "dark"});
    } else {
        setTheme({theme: "light"});
    }
});

function setTheme({theme}) {
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