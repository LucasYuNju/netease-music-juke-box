// import Panel from "./panel/Panel";
// import PlayListView from "./view/PlayListView";
import Application from "./app/Application";

function main() {
    const app = new Application();
    app.placeAt(document.body);
    app.run();
    // const panel = new Panel("nm-panel");
    // panel.title = "一定听过的神级背景配乐";
    // const playListView = new PlayListView("nm-play-list-view");
    // panel.addSubView(playListView);
    // $(document.body).append(panel.$element);
}

$(main)
