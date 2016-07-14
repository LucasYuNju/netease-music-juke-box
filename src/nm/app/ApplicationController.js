import NJUApplicationController from "../../nju/app/ApplicationController";

import Application from "./Application";
import ServiceClient from "../service/ServiceClient";

export default class ApplicationController extends NJUApplicationController {

    createApplication() {
        return new Application();
    }

    async run() {
        // pseudo login
        console.log("Netease Music Application is now running.");

        // refresh play list view
        await ServiceClient.getInstance().login();
        this.application.playListView.items = await ServiceClient.getInstance().getUserPlayLists();
        // select first play list by default
        this.application.playListView.selection = this.application.playListView.items[0];

        const playlist = await ServiceClient.getInstance().getPlayListDetail(this.application.playListView.items[0].id);
        this.application.trackTableView.items = playlist.tracks;
        // select first track by default
    }
}
