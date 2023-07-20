import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { Card, DomNode, el } from "gaia-commons-ts";

dayjs.extend(relativeTime);

export default class Partnerships extends DomNode {

    private partners: {
        name: string;
        logo: string;
        link: string;
    }[] = [{
        name: "THE BALANCE",
        logo: "/images/partnership-banners/the-balance.jpg",
        link: "https://4thebalance.com/",
    }, {
        name: "Layer Lab",
        logo: "/images/partnership-banners/layerlab.jpg",
        link: "http://www.layerlab.io/",
    }, {
        name: "MAGAZINE ND",
        logo: "/images/partnership-banners/magazine-nd.jpg",
        link: "http://www.nftdive.io/",
    }, {
        name: "D&C MEDIA",
        logo: "/images/partnership-banners/dnc-media.jpg",
        link: "http://www.dncmedia.co.kr/",
    }, {
        name: "Lazy Gourmet Club",
        logo: "/images/partnership-banners/lazy-gourmet-club.jpg",
        link: "https://lazygourmet.club/",
    }, {
        name: "XENON",
        logo: "/images/partnership-banners/xenon.jpg",
        link: "https://www.nftxenon.com/",
    }, {
        name: "Monetown (townverse)",
        logo: "/images/partnership-banners/townverse.jpg",
        link: "http://www.townverse.info/",
    }, {
        name: "Anh Sang Games",
        logo: "/images/partnership-banners/anh-sang-games.jpg",
        link: "",
    }, {
        name: "Swapscanner",
        logo: "/images/partnership-banners/swapscanner.jpg",
        link: "https://swapscanner.io/",
    }, {
        name: "Electrik Finance",
        logo: "/images/partnership-banners/electrik-finance.jpg",
        link: "https://electrik.finance/",
    }, {
        name: "HYPESALT",
        logo: "/images/partnership-banners/hypesalt.jpg",
        link: "https://hypesalt.com/",
    }, {
        name: "klaymfers",
        logo: "/images/partnership-banners/klaymfers.jpg",
        link: "https://opensea.io/collection/klaymfers",
    }, {
        name: "KLAYswap",
        logo: "/images/partnership-banners/klayswap.jpg",
        link: "https://klayswap.com/",
    }, {
        name: "Dexata",
        logo: "/images/partnership-banners/dexata.jpg",
        link: "https://dexata.kr/",
    }, {
        name: "DSC Label (DogeSoundClub)",
        logo: "/images/partnership-banners/dsc-label.jpg",
        link: "https://dogesound.club/",
    }, {
        name: "Popcateum",
        logo: "/images/partnership-banners/popcateum.jpg",
        link: "https://popcateum.org/",
    }];

    private partnershipList: DomNode;

    constructor(lang: string) {
        super(".partnerships-view");
        this.append(
            el("h1", "Partnerships"),
            this.partnershipList = el(".partnership-list"),
        );

        for (const partner of this.partners) {
            this.partnershipList.append(
                new Card({},
                    el("a",
                        el("img", { src: partner.logo }),
                        el("main",
                            el("h2", partner.name),
                        ),
                        { href: partner.link, target: "_blank" },
                    ),
                ),
            );
        }
    }
}
