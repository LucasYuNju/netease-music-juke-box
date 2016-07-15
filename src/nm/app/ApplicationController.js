import NJUApplicationController from "../../nju/app/ApplicationController";

import Application from "./Application";
import ServiceClient from "../service/ServiceClient";

// 不同于经典MVC，将MC放在一起了
export default class ApplicationController extends NJUApplicationController {
    init() {
        super.init();
        this._playLists = [];
        this._activePlayList = null;
        this._activeTrack = null;
    }

    get playLists() {
        return this._playLists;
    }

    set playLists(value) {
        this._playLists = value;
        this._onPlayListsChanged();
    }

    get activePlayList() {
        return this._activePlayList;
    }

    set activePlayList(value) {
        if (this.activePlayList !== value) {
            this._activePlayList = value;
            this._onActivePlayListChanged();
        }
    }

    get activeTrack() {
        return this._activeTrack;
    }

    set activeTrack(value) {
        if (this.activeTrack !== value) {
            this._activeTrack = value;
            this._onActiveTrackChanged();
        }
    }

    createApplication() {
        const application = new Application();
        application.playListView.on("selectionchanged", this._playListView_selectionchanged.bind(this));
        application.trackTableView.on("activechanged", this._trackTableView_activechanged.bind(this));
        application.searchView.on("search", this._searchView_search.bind(this));
        return application;
    }

    async run() {
        console.log("Netease Music Application is now running.");
        await ServiceClient.getInstance().login();
        await this._loadUserPlayLists();
        // pseudo login
        // refresh play list view
        // select first play list by default
        // select first track by default
    }

    // model
    async _loadUserPlayLists() {
        this.playLists = await ServiceClient.getInstance().getUserPlayLists();
        if (this.playLists.length > 0) {
            this.application.playListView.selection = this.playLists[0];
        }
        else {
            this.activePlayList = null;
        }
    }

    // controller, update view
    _onPlayListsChanged() {
        this.application.playListView.items = this.playLists;
    }

    // controller, update view
    _onActivePlayListChanged() {
        if (this.activePlayList.id === "search") {
            this.application.playListView.selectItem(null);
        }
        if (this.activePlayList) {
            this.application.trackTableView.items = this.activePlayList.tracks;
        }
        else {
            this.application.trackTableView.items = [];
        }
    }

    // controller
    _onActiveTrackChanged() {
        this.application.playerView.track = this.activeTrack;
    }

    // model
    async _playListView_selectionchanged(e) {
        if (this.application.playListView.selectedId !== null) {
            const playList = await ServiceClient.getInstance().getPlayListDetail(this.application.playListView.selectedId);
            this.activePlayList = playList;
        }
    }

    _trackTableView_activechanged(e) {
        this.activeTrack = this.application.trackTableView.selection;
    }

    async _searchView_search(e) {
        const keyword = this.application.searchView.text;
        const songs = await ServiceClient.getInstance().search(keyword);
        this.activePlayList = {
            id: "search",
            tracks: songs,
        }
    }
}
