import { FileUtil } from "gaia-commons-nodejs";
import { DomNode, TextNode, el } from "gaia-commons-ts";
import { marked } from "marked";

export default class Story extends DomNode {

    constructor(private lang: string) {
        super(".story-view");
        this.append(
            el("h1", "Gaia Protocol Story"),
        );
    }

    public async loadStory(): Promise<this> {
        const markdown = await FileUtil.readText(`./story/${this.lang}.md`);
        this.append(
            el("main.markdown-body", new TextNode(marked(markdown))),
        );
        return this;
    }
}
