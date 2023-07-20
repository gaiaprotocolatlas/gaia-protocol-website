import { Select, Theme, ThemeManager, el } from "gaia-commons-browser";

ThemeManager.init();

const topBar = document.querySelector(".topbar");
if (topBar) {

    const menuPanel = topBar.querySelector(".menu-panel");
    const menuContainer = menuPanel?.querySelector(".menu-container");
    if (menuPanel) {
        document.querySelector(".topbar .menu-button")?.addEventListener("click", () => menuPanel.classList.add("active"));
        menuPanel.querySelector(".close-menu-button")?.addEventListener("click", () => menuPanel.classList.remove("active"));
        menuPanel.addEventListener("click", (event) => {
            if (menuContainer?.contains(event.target as any) !== true) {
                menuPanel.classList.remove("active");
            }
        });
    }

    const themeSelect = new Select({
        defaultValue: ThemeManager.theme,
        options: [{
            value: Theme.Auto,
            dom: el(".option", el("i.fa-solid.fa-circle-half-stroke"), " ", "OS Default"),
        }, {
            value: Theme.Light,
            dom: el(".option", el("i.fa-solid.fa-sun"), " ", "Light"),
        }, {
            value: Theme.Dark,
            dom: el(".option", el("i.fa-solid.fa-moon"), " ", "Dark"),
        }],
    });

    themeSelect.on("select", (value: Theme) => {
        ThemeManager.theme = value;
    });

    menuContainer?.querySelector("footer")?.append(themeSelect.domElement);
}