import NJUApplication from "../../nju/app/Application";

import PlayerView from "../view/PlayerView";
import PlayListView from "../view/PlayListView";
import SearchView from "../view/SearchView";
import SearchViewController from "../view/SearchViewController";
import TrackTableView from "../view/TrackTableView";

export default class Application extends NJUApplication
{
    init() {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
        this.initPlayerView();
        this.initPlayListView();
        this.initSearchView();
        this.initTrackTableView();
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

    initPlayerView() {
        this.playerView = new PlayerView("play-view");
        this.addSubview(this.playerView, this.$("> footer"))
    }

    initPlayListView() {
        this.playListView = new PlayListView("play-list");
        this.addSubview(this.playListView, this.$("> main > aside.sidebar"));
    }

    initSearchView() {
        this.searchViewController = new SearchViewController();
        this.searchView = this.searchViewController.view;
        this.addSubview(this.searchView, this.$("> header"));
    }

    initTrackTableView() {
        this.trackTableView = new TrackTableView("track-table");
        this.addSubview(this.trackTableView, this.$("> main > section"));
    }
}
