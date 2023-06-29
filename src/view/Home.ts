import { el } from "gaia-commons-nodejs";
import DomNode from "gaia-commons-nodejs/lib/static-dom/DomNode.js";

export default class Home extends DomNode {

    constructor() {
        super(".home-view");
        this.append(
            el("video", { autoplay: true, muted: true, loop: true },
                el("source", { src: "https://storage.googleapis.com/gaiaprotocol/banner.mp4", type: "video/mp4" }),
            ),
        );
    }
}
