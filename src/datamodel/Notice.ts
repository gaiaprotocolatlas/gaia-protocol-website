import { Attachment } from "gaia-commons-ts";

export default interface Notice {
    community: string,
    language: string,

    writer: string,
    title: string,
    content: string,
    attachments: Attachment[],
}
