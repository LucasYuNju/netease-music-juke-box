import NJUApplication from "../../nju/app/Application";
import PlayListView from "../view/PlayListView";
import TrackTableView from "../view/TrackTableView"
import PlayerView from "../view/PlayerView";
import ServiceClient from "../service/ServiceClient";

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

    async run() {
        // pseudo login
        console.log("Netease Music Application is now running.");

        // refresh play list view
        await ServiceClient.getInstance().login();
        this.playListView.items = await ServiceClient.getInstance().getUserPlayLists();
        // select first play list by default
        this.playListView.selection = this.playListView.items[0];

        const playlist = await ServiceClient.getInstance().getPlayListDetail(this.playListView.items[0].id);
        this.trackTableView.items = playlist.tracks;
        // select first track by default
    }
}
