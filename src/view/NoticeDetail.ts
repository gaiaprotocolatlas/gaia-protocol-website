import dayjs from "dayjs";
import { DbData } from "gaia-commons-nodejs";
import { DomNode, el } from "gaia-commons-ts";
import Notice from "../datamodel/Notice.js";

export default class NoticeDetail extends DomNode {

    constructor(notice: Notice & DbData, private lang: string) {
        super(".notice-detail-view");
        this.append(
            el("h1", notice.title),
            el(".time", dayjs(notice.createTime).format(lang === "ko" ? "YYYY-MM-DD" : "DD/MM/YYYY")),
            el("p", notice.content),
        );
    }
}
