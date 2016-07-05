import $ from "jquery";
import TrackListView from "./view/TrackListView.js";

$(main);

function main() {
    const trackListView = new TrackListView();
    $(document.body).append(trackListView.$element);
    $.ajax({
        url: "http://music.163.com/api/playlist/detail?id=7308652",
    }).then(response => {
        trackListView.tracks = response.result.tracks;
    })
}
