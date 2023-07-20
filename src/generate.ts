import { FileUtil } from "gaia-commons-nodejs";
import { msg } from "gaia-commons-ts";
import Intro from "./view/Intro.js";
import Layout from "./view/Layout.js";
import News from "./view/News.js";
import Partnerships from "./view/Partnerships.js";
import Stories from "./view/Stories.js";

export default async function generate() {
    msg.loadYAML("en", await FileUtil.readText("locales/en.yml"));
    msg.loadYAML("ko", await FileUtil.readText("locales/ko.yml"));

    await FileUtil.write("docs/index.html", new Layout("Gaia Protocol", new Intro("en"), "en").build());
    await FileUtil.write("docs/news.html", new Layout("News - Gaia Protocol", await new News("en").loadNews(), "en").build());
    await FileUtil.write("docs/partnerships.html", new Layout("Partnerships - Gaia Protocol", new Partnerships("en"), "en").build());
    await FileUtil.write("docs/stories.html", new Layout("Stories - Gaia Protocol", await new Stories("en").loadStory(), "en").build());

    await FileUtil.write("docs/ko/index.html", new Layout("Gaia Protocol", new Intro("ko"), "ko").build());
    await FileUtil.write("docs/ko/news.html", new Layout("뉴스 - Gaia Protocol", await new News("ko").loadNews(), "ko").build());
    await FileUtil.write("docs/ko/partnerships.html", new Layout("파트너십 - Gaia Protocol", new Partnerships("ko"), "ko").build());
    await FileUtil.write("docs/ko/stories.html", new Layout("스토리 - Gaia Protocol", await new Stories("ko").loadStory(), "ko").build());
}
