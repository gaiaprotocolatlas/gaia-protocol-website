import dayjs from "dayjs";
import { DbData } from "gaia-commons-nodejs";
import { Card, DomNode, el } from "gaia-commons-ts";
import Notice from "../datamodel/Notice.js";

export default class News extends DomNode {

    private noticeList: DomNode;

    constructor(notices: (Notice & DbData)[], private lang: string) {
        super(".news-view");
        this.append(
            el("h1", "Gaia Protocol News"),
            this.noticeList = el(".notice-list"),
        );

        for (const notice of notices) {
            this.noticeList.append(
                new Card({},
                    el("a",
                        el("img", { src: "/images/news.jpg" }),
                        el("main",
                            el(".time", dayjs(notice.createTime).format(lang === "ko" ? "YYYY-MM-DD" : "DD/MM/YYYY")),
                            el("h2", notice.title),
                        ),
                        { href: lang === "ko" ? `/ko/notice/${notice.id}` : `/notice/${notice.id}` },
                    ),
                ),
            );
        }
    }
}
