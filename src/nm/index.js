// function main() {
//     const trackListView = new TrackListView();
//     $(document.body).append(trackListView.$element);
//     $.ajax({
//         url: "http://music.163.com/api/playlist/detail?id=7308652",
//     }).then(response => {
//         trackListView.tracks = response.result.tracks;
//     })
// }

import Panel from "./panel/Panel";
import PlayListView from "./view/PlayListView";

function main() {
    const panel = new Panel("nm-panel");
    panel.title = "一定听过的神级背景配乐";
    const playListView = new PlayListView("nm-play-list-view");
    panel.addSubView(playListView);
    $(document.body).append(panel.$element);
}

$(main)
