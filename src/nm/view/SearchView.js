import View from "../../nju/view/View";
import SuggestionView from "./SuggestionView";

export default class SearchView extends View {
    init() {
        super.init();
        this.addStyleClass("nm-search-view");
        this.$element.append(`<span class="icon iconfont icon-search2"/>`);
        this.$input = $(`<input type="search" placeholder="搜索音乐">`);
        this.$element.append(this.$input);
        this.initSuggestionView();

        this.$element.on("keydown", this._keydown.bind(this));
        this.$element.on("click", "span.icon", this._icon_click.bind(this));

        this.$input.on("focus", () => {
            this.trigger("focus");
        });
        this.$input.on("blur", () => {
            this.trigger("blur");
        });
        let inputTimer = null;
        this.$input.on("input", () => {
            if (inputTimer !== null) {
                window.clearTimeout(inputTimer);
                inputTimer = null;
            }
            inputTimer = window.setTimeout(() => {
                this.trigger("input");
            }, 300);
        });
    }

    initSuggestionView() {
        this.suggestionView = new SuggestionView();
        this.addSubview(this.suggestionView);
        this.suggestionView.hide();
    }

    get text() {
        return this.$input.val();
    }

    set text(value) {
        this.$input.val(typeof(value) === "string" ? value.trim() : "");
    }

    search(text = this.text) {
        this.text = text;
        if (text !== "") {
            this.trigger("search");
        }
    }

    suggest() {
        this.trigger("suggest");
    }

    _keydown(e) {
        if (e.keyCode === 13) {
            this.search();
        }
    }

    _icon_click(e) {
        this.search();
    }
}
