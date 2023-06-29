import { FileUtil } from "gaia-commons-nodejs";
import home from "./view/Home.js";
import layout from "./view/Layout.js";

export default async function generate() {
    await FileUtil.write("docs/index.html", layout("Gaia Protocol", await home()));
}
