import NJUApplication from "../../nju/app/Application";
import PlayListView from "../view/PlayListView";

export default class Application extends NJUApplication
{

    init() {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
        this.initPlayListView();
    }

    _initLayout() {
        this.$element.append(`
            <header><h1>黄易云音乐</h1></header>
            <main>
                <aside></aside>
                <section class="content"></section>
            </main>
            <footer></footer>
        `);
    }

    initPlayListView() {
        this.playListView = new PlayListView("play-list");
        this.addSubview(this.playListView, this.$("> main > aside"));
    }

    run() {
        console.log("Netease Music Application is now running.");
    }
}
