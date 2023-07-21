import dayjs from "dayjs";
import { Card, DomNode, el } from "gaia-commons-ts";
export default class News extends DomNode {
    lang;
    noticeList;
    constructor(notices, lang) {
        super(".news-view");
        this.lang = lang;
        this.append(el("h1", "Gaia Protocol News"), this.noticeList = el(".notice-list"));
        for (const notice of notices) {
            this.noticeList.append(new Card({}, el("a", el("img", { src: "/images/news.jpg" }), el("main", el(".time", dayjs(notice.createTime).format(lang === "ko" ? "YYYY-MM-DD" : "DD/MM/YYYY")), el("h2", notice.title)), { href: lang === "ko" ? `/ko/notice/${notice.id}` : `/notice/${notice.id}` })));
        }
    }
}
//# sourceMappingURL=News.js.map