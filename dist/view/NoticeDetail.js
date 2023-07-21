import dayjs from "dayjs";
import { DomNode, el } from "gaia-commons-ts";
export default class NoticeDetail extends DomNode {
    lang;
    constructor(notice, lang) {
        super(".notice-detail-view");
        this.lang = lang;
        this.append(el("h1", notice.title), el(".time", dayjs(notice.createTime).format(lang === "ko" ? "YYYY-MM-DD" : "DD/MM/YYYY")), el("p", notice.content));
    }
}
//# sourceMappingURL=NoticeDetail.js.map