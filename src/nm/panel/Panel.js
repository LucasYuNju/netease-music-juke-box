import View from "../../nju/view/View";

export default class Panel extends View {
    init() {
        super.init();
        this.addStyleClass("nm-panel");
        this._title = "";
        this._initLayout();
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
        this.$header.children("h2").text(title);
    }

    _initLayout() {
        this.$header = $(`<header><h2></h2></header>`);
        this.$container = $(`<main/>`);
        this.$element.append(this.$header);
        this.$element.append(this.$container);
    }
}
