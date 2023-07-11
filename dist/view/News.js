import { DomNode, el } from "gaia-commons-ts";
export default class News extends DomNode {
    lang;
    constructor(lang) {
        super(".news-view");
        this.lang = lang;
        this.append();
    }
    async loadNews() {
        const response = await fetch("https://cmp-server.gaia.cc/notice/list?community=64808a252adf744e396c271c");
        if (response.ok) {
            const notices = (await response.json()).notices;
            for (const notice of notices) {
                if (notice.language === this.lang) {
                    this.append(el("div", el("h2", notice.title), el("p", notice.content)));
                }
            }
        }
        return this;
    }
}
//# sourceMappingURL=News.js.map