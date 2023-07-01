import { el } from "gaia-commons-nodejs";
import DomNode from "gaia-commons-nodejs/lib/static-dom/DomNode.js";
export default class Intro extends DomNode {
    constructor() {
        super(".intro-view");
        this.append(el("video", { autoplay: true, muted: true, loop: true }, el("source", { src: "https://storage.googleapis.com/gaiaprotocol/banner.mp4", type: "video/mp4" })));
    }
}
//# sourceMappingURL=Home.js.map