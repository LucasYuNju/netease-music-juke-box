import View from "../../nju/view/View";

export default class PlayListView extends View {
    init() {
        super.init();
        this._track = null;
        // this.$name = $(`<span class="track-name"/>`);
        // this.$element.append(this.$name);
        const $audio = $(`<audio controls><source/></audio>`);
        $audio.append(this.$source);
        this.$element.append($audio);
        this.$source = this.$("> audio > source");
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
        console.log("render track player");
        // this.$name.text(this.track.name);
        // console.log(this.track);
    }
}
