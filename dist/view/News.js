import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { Card, DomNode, el } from "gaia-commons-ts";
dayjs.extend(relativeTime);
export default class News extends DomNode {
    lang;
    noticeList;
    constructor(notices, lang) {
        super(".news-view");
        this.lang = lang;
        this.append(el("h1", "Gaia Protocol News"), this.noticeList = el(".notice-list"));
        for (const notice of notices) {
            this.noticeList.append(new Card({}, el("a", el("img", { src: "/images/news.jpg" }), el("main", el(".time", dayjs(notice.createTime).fromNow()), el("h2", notice.title)), { href: `/notice/${notice.id}` })));
        }
    }
}
//# sourceMappingURL=News.js.map