import View from "../../nju/view/View";

export default class PlayListView extends View {
    init() {
        super.init();
        this.addStyleClass("nm-track-table-view");
    }

    getElementTag() {
        return "table";
    }
}
