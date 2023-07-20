import { FileUtil } from "gaia-commons-nodejs";
import { msg } from "gaia-commons-ts";
import Intro from "./view/Intro.js";
import Layout from "./view/Layout.js";
import News from "./view/News.js";
import NoticeDetail from "./view/NoticeDetail.js";
import Partnerships from "./view/Partnerships.js";
import Story from "./view/Story.js";

export default async function generate() {

    msg.loadYAML("en", await FileUtil.readText("locales/en.yml"));
    msg.loadYAML("ko", await FileUtil.readText("locales/ko.yml"));

    const noticesEN = (await (await fetch("https://cmp-server.gaia.cc/notices?community=64808a252adf744e396c271c&language=en")).json()).notices;
    const noticesKO = (await (await fetch("https://cmp-server.gaia.cc/notices?community=64808a252adf744e396c271c&language=ko")).json()).notices;

    await FileUtil.write("docs/index.html", new Layout("Gaia Protocol", new Intro("en"), "en").build());
    await FileUtil.write("docs/news.html", new Layout("News - Gaia Protocol", new News(noticesEN, "en"), "en").build());
    for (const notice of noticesEN) {
        await FileUtil.write(`docs/notice/${notice.id}.html`, new Layout(notice.title + " - Gaia Protocol", new NoticeDetail(notice, "en"), "en").build());
    }
    await FileUtil.write("docs/partnerships.html", new Layout("Partnerships - Gaia Protocol", new Partnerships("en"), "en").build());
    await FileUtil.write("docs/story.html", new Layout("Story - Gaia Protocol", await new Story("en").loadStory(), "en").build());

    await FileUtil.write("docs/ko/index.html", new Layout("Gaia Protocol", new Intro("ko"), "ko").build());
    await FileUtil.write("docs/ko/news.html", new Layout("뉴스 - Gaia Protocol", new News(noticesKO, "ko"), "ko").build());
    for (const notice of noticesKO) {
        await FileUtil.write(`docs/ko/notice/${notice.id}.html`, new Layout(notice.title + " - Gaia Protocol", new NoticeDetail(notice, "ko"), "ko").build());
    }
    await FileUtil.write("docs/ko/partnerships.html", new Layout("파트너십 - Gaia Protocol", new Partnerships("ko"), "ko").build());
    await FileUtil.write("docs/ko/story.html", new Layout("스토리 - Gaia Protocol", await new Story("ko").loadStory(), "ko").build());
}
