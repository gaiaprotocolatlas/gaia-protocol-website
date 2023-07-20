import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { DomNode, el } from "gaia-commons-ts";
dayjs.extend(relativeTime);
export default class NoticeDetail extends DomNode {
    lang;
    constructor(notice, lang) {
        super(".notice-detail-view");
        this.lang = lang;
        this.append(el("h1", notice.title), el(".time", dayjs(notice.createTime).fromNow()), el("p", notice.content));
    }
}
//# sourceMappingURL=NoticeDetail.js.map