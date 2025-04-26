function toggleTheme(e) {
    const theme = localStorage.getItem("color-theme");

    if (theme === "dark") {
        setTheme({theme: "light"});
    } else {
        setTheme({theme: "dark"});
    }
}