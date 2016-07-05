export default class TrackListView {
    constructor() {
        this._tracks = [];
        this.$element = $(`<ul class="nm-track-list-view"/>`);
    }

    set tracks(tracks) {
        this._tracks = tracks;
        this._removeAllTracks();
        this._appendTracks(this.tracks);
    }

    get tracks() {
         return this._tracks;
    }

    _removeAllTracks() {
        this.$element.children().remove();
    }

    _appendTracks(tracks) {
        if(Array.isArray(tracks)) {
            tracks.forEach(this._appendTrack.bind(this));
        }
    }

    _appendTrack(track) {
        const $li = $(
            `<li class="track">
                <a href=${track.mp3Url}>
                    <span class="name">${track.name}</span>
                </a>
            </li>`
        )
        this.$element.append($li);
    }
}
