function toggleTheme(e) {
    const theme = localStorage.getItem("color-theme");

    if (theme === "dark") {
        setTheme({theme: "light"});
    } else {
        setTheme({theme: "dark"});
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const sidebarContent = document.querySelector(".sidebar__content");
  
  if (sidebarContent) {
    const sidebarEl = sidebarContent.querySelectorAll(".sidebar__url");
    const currentPath = window.location.pathname;
    
    sidebarEl?.forEach(sidebar => {
      if (currentPath === sidebar.getAttribute("href")) {
        sidebar.classList.add("active__sidebar");
      } else {
        sidebar.classList.remove("active__sidebar");
      }
    });
  }
});