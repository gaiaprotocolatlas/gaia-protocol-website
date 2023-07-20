import { FileUtil } from "gaia-commons-nodejs";
import { DomNode, TextNode, el } from "gaia-commons-ts";
import { marked } from "marked";
export default class Story extends DomNode {
    lang;
    constructor(lang) {
        super(".story-view");
        this.lang = lang;
        this.append(el("h1", "Gaia Protocol Story"));
    }
    async loadStory() {
        const markdown = await FileUtil.readText(`./story/${this.lang}.md`);
        this.append(el("main.markdown-body", new TextNode(marked(markdown))));
        return this;
    }
}
//# sourceMappingURL=Story.js.map