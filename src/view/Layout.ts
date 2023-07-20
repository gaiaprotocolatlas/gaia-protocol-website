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
            menu: this.lang === "en" ? [{
                name: "News",
                uri: "/news",
            }, {
                name: "Partnerships",
                uri: "/partnerships",
            }, {
                name: "Story",
                uri: "/story",
            }] : [{
                name: "뉴스",
                uri: "/ko/news",
            }, {
                name: "파트너십",
                uri: "/ko/partnerships",
            }, {
                name: "스토리",
                uri: "/ko/story",
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
            social: {
                twitter: "https://twitter.com/Gaia_Protocol",
                discord: "https://discord.gg/gaiaprotocol",
                telegram: this.lang === "en" ? "https://t.me/gaiaprotocol" : "https://t.me/gaiaprotocol_kr",
                github: "https://github.com/gaiaprotocol",
                youtube: "https://youtube.com/gaiaprotocol",
                kakaotalk: this.lang === "ko" ? "https://open.kakao.com/o/gE5KSgAe" : undefined,
            },
            copyRight: "© 2022 - 2023 Gaia Protocol",
            privacyPolicy: "https://resources.gaia.cc/html/privacy.html",
            termsOfService: "https://resources.gaia.cc/html/terms.html",
        }).build()}
        </div>
        <script src="https://kit.fontawesome.com/79ded072f6.js" crossorigin="anonymous"></script>
        <script src="/bundle.js"></script>
    </body>
    
    </html>`.split("\n").map(line => line.trim()).join("");
    }
}
