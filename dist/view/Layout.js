import { ResponsiveImage, TopBar, el } from "gaia-commons-ts";
export default class Layout {
    title;
    content;
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    build() {
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
    
    <body data-theme="dark">
        <div class="layout">
            ${new TopBar({
            logo: el("h1", new ResponsiveImage("img", "/images/logo.png"), el("span", "Gaia Protocol")),
            menu: [{
                    name: "News",
                    uri: "/news",
                }, {
                    name: "Partnerships",
                    uri: "/partnerships",
                }, {
                    name: "Stories",
                    uri: "/stories",
                }],
        }).build()}
            ${this.content.build()}
        </div>
        <script src="https://kit.fontawesome.com/79ded072f6.js" crossorigin="anonymous"></script>
        <script src="/bundle.js"></script>
    </body>
    
    </html>`.split("\n").map(line => line.trim()).join("");
    }
}
//# sourceMappingURL=Layout.js.map