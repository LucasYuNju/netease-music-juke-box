import NJUApplicationController from "../../nju/app/ApplicationController";

import Application from "./Application";
import ServiceClient from "../service/ServiceClient";

// 非经典的MVC，将MC放在一起了
export default class ApplicationController extends NJUApplicationController {
    init() {
        super.init();
        this._playLists = [];
        this._selectedPlayList = null;
    }

    get playLists() {
        return this._playLists;
    }

    set playLists(value) {
        this._playLists = value;
        this._onPlayListsChanged();
    }

    get selectedPlayList() {
        return this._selectedPlayList;
    }

    set selectedPlayList(value) {
        if (this.selectedPlayList !== value) {
            this._selectedPlayList = value;
            this._onSelectedPlayListChanged();
        }
    }

    createApplication() {
        const application = new Application();
        application.playListView.on("selectionchanged", this._playListView_selectionchanged.bind(this));
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

    _onPlayListsChanged() {
        this.application.playListView.items = this.playLists;
    }

    _onSelectedPlayListChanged() {
        if (this.selectedPlayList) {
            this.application.trackTableView.items = this.selectedPlayList.tracks;
        }
        else {
            this.application.trackTableView.items = [];
        }
    }

    async _loadUserPlayLists() {
        this.playLists = await ServiceClient.getInstance().getUserPlayLists();
        if (this.playLists.length > 0) {
            this.application.playListView.selection = this.playLists[0];
        }
        else {
            this.selectedPlayList = null;
        }
    }

    async _playListView_selectionchanged(e) {
        const playList = await ServiceClient.getInstance().getPlayListDetail(this.application.playListView.selectedId);
        this.selectedPlayList = playList;
    }
}
