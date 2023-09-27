import html from "html-literal";
import * as views from "./views";


export default () => html`${views["Bio"]()}, ${views["Pizza"]()}, ${views["Order"]()}, ${views["Home"]()},`;
