import { FileUtil } from "gaia-commons-nodejs";
import Home from "./view/Home.js";
import Layout from "./view/Layout.js";

export default async function generate() {
    await FileUtil.write("docs/index.html", new Layout("Gaia Protocol", new Home()).build());
}
