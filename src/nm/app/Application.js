import NJUApplication from "../../nju/app/Application";

import PlayListView from "../view/PlayListView";
import TrackTableView from "../view/TrackTableView"
import PlayerView from "../view/PlayerView";

export default class Application extends NJUApplication
{
    init() {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
        this.initPlayListView();
        this.initTrackTableView();
        this.initPlayerView();
    }

    _initLayout() {
        this.$element.append(`
            <header><h1>黄易云音乐</h1></header>
            <main>
                <aside class="sidebar"></aside>
                <section class="content"></section>
            </main>
            <footer></footer>
        `);
    }

    initPlayListView() {
        this.playListView = new PlayListView("play-list");
        this.addSubview(this.playListView, this.$("> main > aside.sidebar"));
    }

    initTrackTableView() {
        this.trackTableView = new TrackTableView("track-table");
        this.addSubview(this.trackTableView, this.$("> main > section"));
    }

    initPlayerView() {
        this.playerView = new PlayerView("play-view");
        this.addSubview(this.playerView, this.$("> footer"))
    }
}
