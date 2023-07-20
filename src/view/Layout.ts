import { DomNode, Footer, ResponsiveImage, TopBar, el } from "gaia-commons-ts";

export default class Layout {
    constructor(private title: string, private content: DomNode, private lang: string) { }

    public build() {
        return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">
        <title>${this.title}</title>
        <link rel="stylesheet" type="text/css" href="/bundle.css" />
    </head>
    
    <body>
        <div class="layout">
            ${new TopBar({
            logo: el("h1",
                new ResponsiveImage("img", "/images/logos/logo.png"),
                el("span", "Gaia Protocol"),
            ),
            darkModeLogo: el("h1",
                new ResponsiveImage("img", "/images/logos/logo-dark-mode.png"),
                el("span", "Gaia Protocol"),
            ),
            menu: [{
                name: "News",
                uri: "/news",
            }, {
                name: "Partnerships",
                uri: "/partnerships",
            }, {
                name: "Story",
                uri: "/story",
            }],
        }, this.lang === "en" ? el("a.select-lang-button",
            el("i.fa-solid.fa-globe"),
            " KO",
            {
                href: "/ko",
            },
        ) : el("a.select-lang-button",
            el("i.fa-solid.fa-globe"),
            " EN",
            {
                href: "/",
            },
        )).build()}
            ${this.content.build()}
            ${new Footer({
            logo: el("h1",
                new ResponsiveImage("img", "/images/logos/logo.png"),
                el("span", "Gaia Protocol"),
            ),
            darkModeLogo: el("h1",
                new ResponsiveImage("img", "/images/logos/logo-dark-mode.png"),
                el("span", "Gaia Protocol"),
            ),
        }).build()}
        </div>
        <script src="https://kit.fontawesome.com/79ded072f6.js" crossorigin="anonymous"></script>
        <script src="/bundle.js"></script>
    </body>
    
    </html>`.split("\n").map(line => line.trim()).join("");
    }
}
