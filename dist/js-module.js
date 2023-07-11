const menuPanel = document.querySelector(".topbar .menu-panel");
if (menuPanel) {
    document.querySelector(".topbar .menu-button")?.addEventListener("click", () => menuPanel.classList.add("active"));
    menuPanel.querySelector(".close-menu-button")?.addEventListener("click", () => menuPanel.classList.remove("active"));
}
export {};
//# sourceMappingURL=js-module.js.map