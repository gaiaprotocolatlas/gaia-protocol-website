import { DomNode, el, msg } from "gaia-commons-ts";
export default class Intro extends DomNode {
    constructor(lang) {
        super(".intro-view");
        this.append(el("header", el("video", { autoplay: true, muted: true, loop: true }, el("source", { src: "https://storage.googleapis.com/gaiaprotocol/banner.mp4", type: "video/mp4" })), el("main", el("h1", "Gaia Protocol"), el("p", msg("intro-view-intro", lang)))), el("section.service"), el("section.service"), el("section.service"));
    }
}
//# sourceMappingURL=Intro.js.map