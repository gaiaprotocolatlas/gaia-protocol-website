import { FileUtil } from "gaia-commons-nodejs";
import { DomNode, el } from "gaia-commons-ts";
import { marked } from "marked";

export default class Stories extends DomNode {

    constructor(private lang: string) {
        super(".stories-view");
        this.append(
        );
    }

    public async loadStory(): Promise<this> {
        const markdown = await FileUtil.readText(`./stories/${this.lang}.md`);
        this.append(
            el("div", { innerHTML: marked(markdown) }),
        );
        return this;
    }
}
