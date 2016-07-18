import View from "../../nju/view/View";

export default class TrackView extends View {
    init() {
        super.init();
        this._track = null;
        this.addStyleClass("nm-track-view");
        this.$cover = $(`<img class="cover"/>`)
        this.$element.append(this.$cover);
        this.$name = $(`<p class="name"/>`)
        this.$element.append(this.$name);
        this.$artist = $(`<p class="artist"/>`)
        this.$element.append(this.$artist);
    }

    get track() {
        return this._track;
    }

    set track(value) {
        if (value !== this.track) {
            this._track = value;
            this._renderProfile();
        }
    }

    _renderProfile() {
        this.$name.text(this.track.name);
        this.$artist.text(this.track.album.artists.map(artist => artist.name).join(","));
        this.$cover.attr("src", this.track.album.blurPicUrl);
    }

    hide() {
        this.$element.hide();
    }

    show() {
        this.$element.show();
    }
}
