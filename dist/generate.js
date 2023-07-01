import { FileUtil, msg } from "gaia-commons-nodejs";
import Intro from "./view/Intro.js";
import Layout from "./view/Layout.js";
export default async function generate() {
    await msg.loadYAMLs({
        "en": ["locales/en.yml"],
        "ko": ["locales/ko.yml"],
    });
    await FileUtil.write("docs/index.html", new Layout("Gaia Protocol", new Intro("en")).build());
    await FileUtil.write("docs/ko/index.html", new Layout("Gaia Protocol", new Intro("ko")).build());
}
//# sourceMappingURL=generate.js.map