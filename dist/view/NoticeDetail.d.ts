import { DbData } from "gaia-commons-nodejs";
import { DomNode } from "gaia-commons-ts";
import Notice from "../datamodel/Notice.js";
export default class NoticeDetail extends DomNode {
    private lang;
    constructor(notice: Notice & DbData, lang: string);
}
//# sourceMappingURL=NoticeDetail.d.ts.map