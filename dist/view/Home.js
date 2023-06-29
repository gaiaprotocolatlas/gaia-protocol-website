import { el } from "gaia-commons-nodejs";
export default async function home() {
    return el(".home-view", el("video", { autoplay: true, muted: true, loop: true }, el("source", { src: "https://storage.googleapis.com/gaiaprotocol/banner.mp4", type: "video/mp4" })));
}
//# sourceMappingURL=Home.js.map