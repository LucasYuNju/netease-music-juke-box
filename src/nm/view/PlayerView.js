import View from "../../nju/view/View";

export default class PlayListView extends View {
    init() {
        super.init();
        this._track = null;
        this._playing = false;
        this._currentTime = 0;
        this.addStyleClass("nm-player-view");
        this.$audio = $(`<audio controls autoplay loop/>`);
        this.$element.append(this.$audio);
        this.$play = $(`<span class="player-control">播放</span>`);
        this.$element.append(this.$play);
        this.$next = $(`<span class="player-control">下一首</span>`);
        this.$element.append(this.$next);
        this.$progressBar = $(`<span class="player-control">00:00</span>`);
        this.$element.append(this.$progressBar);

        this.$audio[0].addEventListener("progress", this._audio_progress.bind(this));
        this.$play.on("click", this._play_click.bind(this));
        this.$progressBar.on("click", this._progressBar_click.bind(this));
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
        // console.log(this.track);
        const mp3 = this.track.mp3Url;
        this.$audio.attr("src", mp3);
        this._playing = true;
    }

    _play_click(e) {
        this._playing = !this._playing;
        this.$play.text(this._playing ? "暂停" : "播放");
    }

    _progressBar_click(e) {

    }

    _audio_progress(e) {
        console.log("progress");
    }
}
