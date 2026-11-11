document.addEventListener("DOMContentLoaded", () => {
    // 1. Atualização dinâmica do ano e data de modificação no rodapé
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedP = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedP) {
        lastModifiedP.textContent = `Última Modificação: ${document.lastModified}`;
    }

    // 2. Lógica do Menu Hambúrguer Responsivo
    const mainNav = document.getElementById("nav-list");
    const hamburgerBtn = document.getElementById("menu-btn");

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener("click", () => {
            mainNav.classList.toggle("open");
            hamburgerBtn.classList.toggle("open");
        });
    }
});