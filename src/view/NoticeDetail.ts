import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { DbData } from "gaia-commons-nodejs";
import { DomNode, el } from "gaia-commons-ts";
import Notice from "../datamodel/Notice.js";

dayjs.extend(relativeTime);

export default class NoticeDetail extends DomNode {

    constructor(notice: Notice & DbData, private lang: string) {
        super(".notice-detail-view");
        this.append(
            el("h1", notice.title),
            el(".time", dayjs(notice.createTime).fromNow()),
            el("p", notice.content),
        );
    }
}
