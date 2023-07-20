import { Card, DomNode, el, msg } from "gaia-commons-ts";
export default class Intro extends DomNode {
    constructor(lang) {
        super(".intro-view");
        this.append(el("header", el("video", { autoplay: true, muted: true, loop: true }, el("source", { src: "https://storage.googleapis.com/gaiaprotocol/banner.mp4", type: "video/mp4" })), el("main", el("h1", "Gaia Protocol"), el("p", msg("intro-view-intro", lang)))), el("section.assets", el("main", el("h2", msg("intro-view-assets-title", lang)), el("p", msg("intro-view-assets-description", lang)), el(".cards", new Card({}, el("img", { src: "/images/logos/gaiatoken-logo.jpg" }), el("main", el("h3", "GaiaToken"), el("p", msg("intro-view-gaiatoken-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://docs.gaia.cc/gaiatoken",
            target: "_blank",
        }))), new Card({}, el("img", { src: "/images/logos/gods-logo.jpg" }), el("main", el("h3", "Gaia Protocol Gods"), el("p", msg("intro-view-gaia-protocol-gods-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://docs.gaia.cc/gaia-protocol-gods",
            target: "_blank",
        })))))), el("section.technologies", el("main", el("h2", msg("intro-view-tech-title", lang)), el("p", msg("intro-view-tech-description", lang)), el(".cards", new Card({}, el("img", { src: "/images/logos/gods-logo.jpg" }), el("main", el("h3", "Gaia Accoounts"), el("p", msg("intro-view-gaia-accounts-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://docs.gaia.cc/gaia-accounts",
            target: "_blank",
        }))), new Card({}, el("img", { src: "/images/logos/gods-logo.jpg" }), el("main", el("h3", "Trinity"), el("p", msg("intro-view-trinity-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://docs.gaia.cc/trinity",
            target: "_blank",
        }))), new Card({}, el("img", { src: "/images/logos/gods-logo.jpg" }), el("main", el("h3", "Gaia Chain"), el("p", msg("intro-view-gaia-chain-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://gaiachain.org",
            target: "_blank",
        }))), new Card({}, el("img", { src: "/images/logos/gods-logo.jpg" }), el("main", el("h3", "Gaia Chat Bridge"), el("p", msg("intro-view-gaia-chat-bridge-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://docs.gaia.cc/gaia-chat-bridge",
            target: "_blank",
        }))), new Card({}, el("img", { src: "/images/logos/gods-logo.jpg" }), el("main", el("h3", "Gaia CMP"), el("p", msg("intro-view-gaia-cmp-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://cmp.gaia.cc",
            target: "_blank",
        })))))), el("section.services", el("main", el("h2", msg("intro-view-service-title", lang)), el("p", msg("intro-view-service-description", lang)), el(".cards", new Card({}, el("img", { src: "/images/logos/gaia-dex-logo.jpg" }), el("main", el("h3", "Gaia DEX"), el("p", msg("intro-view-gaia-dex-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://gaiadex.com",
            target: "_blank",
        }))), new Card({}, el("img", { src: "/images/logos/gaia-bridge-logo.jpg" }), el("main", el("h3", "Gaia Asset Bridge"), el("p", msg("intro-view-gaia-asset-bridge-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://gaiabridge.com",
            target: "_blank",
        }))), new Card({}, el("img", { src: "/images/logos/hermes-logo.jpg" }), el("main", el("h3", "Hermes"), el("p", msg("intro-view-hermes-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://hermes.gaia.cc",
            target: "_blank",
        }))), new Card({}, el("img", { src: "/images/logos/smarty-logo.jpg" }), el("main", el("h3", lang === "en" ? "Smarty" : "똑똑이"), el("p", msg("intro-view-smarty-description", lang)), lang === "en" ? el(".app-links", el("a", msg("app-store-button", lang), el("i.fa-brands.fa-app-store-ios"), {
            href: "https://apps.apple.com/us/app/smarty-smart-ai-chatbot/id6446423783",
            target: "_blank",
        }), el("a", msg("google-play-button", lang), el("i.fa-brands.fa-google-play"), {
            href: "https://play.google.com/store/apps/details?id=com.gaiaprotocol.ttogttogi&hl=en_US",
            target: "_blank",
        })) : el(".app-links", el("a", msg("google-play-button", lang), el("i.fa-brands.fa-google-play"), {
            href: "https://play.google.com/store/apps/details?id=com.gaiaprotocol.ttogttogi&hl=ko_KR",
            target: "_blank",
        }), el("a", msg("app-store-button", lang), el("i.fa-brands.fa-app-store-ios"), {
            href: "https://apps.apple.com/kr/app/smarty-smart-ai-chatbot/id6446423783",
            target: "_blank",
        }))))))), el("section.contents", el("main", el("h2", msg("intro-view-contents-title", lang)), el("p", msg("intro-view-contents-description", lang)), el(".cards", new Card({}, el("img", { src: "/images/logos/gaiawar-logo.jpg" }), el("main", el("h3", "Gaia War"), el("p", msg("intro-view-gaia-war-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://gaiawar.com",
            target: "_blank",
        }))), new Card({}, el("img", { src: "/images/logos/the-koreans-1945-logo.jpg" }), el("main", el("h3", "The Koreans 1945"), el("p", msg("intro-view-the-koreans-1945-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://opensea.io/collection/thekoreans1945",
            target: "_blank",
        }))), new Card({}, el("img", { src: "/images/logos/bohosin-logo.jpg" }), el("main", el("h3", "Bohosin"), el("p", msg("intro-view-bohosin-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://opensea.io/collection/bohosin",
            target: "_blank",
        })))))), el("section.family-projects", el("main", el("h2", msg("intro-view-family-project-title", lang)), el("p", msg("intro-view-family-project-description", lang)), el(".cards", new Card({}, el("img", { src: "/images/logos/shigor-logo.jpg" }), el("main", el("h3", "Shigor"), el("p", msg("intro-view-shigor-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://shigor.com",
            target: "_blank",
        }))), new Card({}, el("img", { src: "/images/logos/kingcrowndao-logo.jpg" }), el("main", el("h3", "King Crown DAO"), el("p", msg("intro-view-king-crown-dao-description", lang)), el("a", msg("learn-more-button", lang), el("i.fa-solid.fa-chevron-right"), {
            href: "https://twitter.com/BaseKongz",
            target: "_blank",
        })))))));
    }
}
//# sourceMappingURL=Intro.js.map