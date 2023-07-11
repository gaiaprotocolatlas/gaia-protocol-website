import { FileUtil } from "gaia-commons-nodejs";
import { DomNode, el } from "gaia-commons-ts";
import { marked } from "marked";
export default class Stories extends DomNode {
    lang;
    constructor(lang) {
        super(".stories-view");
        this.lang = lang;
        this.append();
    }
    async loadStory() {
        const markdown = await FileUtil.readText(`./stories/${this.lang}.md`);
        this.append(el("div", { innerHTML: marked(markdown) }));
        return this;
    }
}
//# sourceMappingURL=Stories.js.map