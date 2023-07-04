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
    await FileUtil.write("docs/index.html", new Layout("Gaia Protocol", new Intro("en")).build());
    await FileUtil.write("docs/news.html", new Layout("News - Gaia Protocol", new News("en")).build());
    await FileUtil.write("docs/partnerships.html", new Layout("Partnerships - Gaia Protocol", new Partnerships("en")).build());
    await FileUtil.write("docs/stories.html", new Layout("Stories - Gaia Protocol", new Stories("en")).build());
    await FileUtil.write("docs/ko/index.html", new Layout("Gaia Protocol", new Intro("ko")).build());
    await FileUtil.write("docs/ko/news.html", new Layout("뉴스 - Gaia Protocol", new News("ko")).build());
    await FileUtil.write("docs/ko/partnerships.html", new Layout("파트너십 - Gaia Protocol", new Partnerships("ko")).build());
    await FileUtil.write("docs/ko/stories.html", new Layout("스토리 - Gaia Protocol", new Stories("ko")).build());
}
//# sourceMappingURL=generate.js.map