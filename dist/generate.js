import { FileUtil } from "gaia-commons-nodejs";
import home from "./page/home.js";
import layout from "./page/layout.js";
export default async function generate() {
    await FileUtil.write("docs/index.html", layout("Gaia Protocol", await home()));
}
//# sourceMappingURL=generate.js.map