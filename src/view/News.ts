import { DomNode, el } from "gaia-commons-ts";
import Notice from "../datamodel/Notice.js";


export default class News extends DomNode {

    constructor(private lang: string) {
        super(".news-view");
        this.append(
        );
    }

    public async loadNews(): Promise<this> {
        const response = await fetch("https://cmp-server.gaia.cc/notice/list?community=64808a252adf744e396c271c");
        if (response.ok) {
            const notices: Notice[] = (await response.json()).notices;
            for (const notice of notices) {
                if (notice.language === this.lang) {
                    this.append(
                        el("div",
                            el("h2", notice.title),
                            el("p", notice.content),
                        ),
                    );
                }
            }
        }
        return this;
    }
}
