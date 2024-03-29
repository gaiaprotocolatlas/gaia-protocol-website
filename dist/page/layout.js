import { ResponsiveImage, TopBar } from "gaia-commons-nodejs";
export default function layout(title, content) {
    return `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">
    <title>${title}</title>
    <link rel="stylesheet" type="text/css" href="/bundle.css" />
</head>

<body>
    ${TopBar({
        logo: ResponsiveImage("img", "/images/logo.png"),
        menu: [{
                name: "Home",
                uri: "/",
            }],
    })}
    ${content}
    <script src="/bundle.js"></script>
</body>

</html>`.split("\n").map(line => line.trim()).join("");
}
//# sourceMappingURL=layout.js.map