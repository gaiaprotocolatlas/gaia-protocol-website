import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { DbData } from "gaia-commons-nodejs";
import { Card, DomNode, el } from "gaia-commons-ts";
import Notice from "../datamodel/Notice.js";

dayjs.extend(relativeTime);

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
                            el(".time", dayjs(notice.createTime).fromNow()),
                            el("h2", notice.title),
                        ),
                        { href: `/notice/${notice.id}` },
                    ),
                ),
            );
        }
    }
}
