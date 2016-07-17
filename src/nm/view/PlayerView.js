import View from "../../nju/view/View";

export default class PlayListView extends View {
    init() {
        super.init();
        this._track = null;
        this.$audio = $(`<audio controls autoplay loop/>`);
        this.$element.append(this.$audio);
        this.addStyleClass("nm-player-view");
    }

    getElementTag() {
        return "div";
    }

    get track() {
        return this._track;
    }

    set track(value) {
        if (value !== this.track) {
            this._track = value;
            this.renderPlayer();
        }
    }

    renderPlayer() {
        console.log(this.track);
        const mp3 = this.track.mp3Url;
        this.$audio.attr("src", mp3);
    }
}
