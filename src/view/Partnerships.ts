import { DomNode, el } from "gaia-commons-ts";

export default class Partnerships extends DomNode {

    constructor(lang: string) {
        super(".partnerships-view");
        this.append(
            el("img", {src: "/images/partnership-banners/dsc-label.jpg"}),
        );
    }
}
