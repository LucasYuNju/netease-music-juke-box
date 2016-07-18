import NJUApplication from "../../nju/app/Application";

import PlayerView from "../view/PlayerView";
import PlayListView from "../view/PlayListView";
import PlayerViewController from "../view/PlayerViewController";
import SearchView from "../view/SearchView";
import SearchViewController from "../view/SearchViewController";
import TrackView from "../view/TrackView";
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
        this.initTrackView();
        this.initTrackTableView();
    }

    _initLayout() {
        this.$element.append(`
            <header>
                <span class="logo iconfont icon-netease-music"></span>
                <h1>网之易云音乐</h1></header>
            <main>
                <aside class="sidebar"></aside>
                <section class="content"></section>
            </main>
            <footer></footer>
        `);
    }

    initPlayerView() {
        // this.playerViewController = new PlayerViewController();
        this.playerView = new PlayerView("player");
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

    initTrackView() {
        this.trackView = new TrackView("track-profile");
        this.trackView.hide();
        this.addSubview(this.trackView, this.$("> main > aside.sidebar"));
    }

    initTrackTableView() {
        this.trackTableView = new TrackTableView("track-table");
        this.addSubview(this.trackTableView, this.$("> main > section"));
    }
}
