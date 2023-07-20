import { DbData } from "gaia-commons-nodejs";
import { DomNode } from "gaia-commons-ts";
import Notice from "../datamodel/Notice.js";
export default class News extends DomNode {
    private lang;
    private noticeList;
    constructor(notices: (Notice & DbData)[], lang: string);
}
//# sourceMappingURL=News.d.ts.map