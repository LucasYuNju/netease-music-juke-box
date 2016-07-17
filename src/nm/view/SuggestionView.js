import ListView from "../../nju/view/ListView";

export default class SuggestionView extends ListView {
    init() {
        super.init();
        this.addStyleClass("suggestion-view");
    }

    getItemElementTag() {
        return "li";
    }

    activate() {
        this.removeStyleClass("hidden");
    }

    deactivate() {
        this.addStyleClass("hidden");
    }

    $createNewItem() {
        const $li = super.$createNewItem();
        $li.append(`
            <span class="text"></span>
        `);
        return $li;
    }

    renderItem(item, $item) {
        super.renderItem(item, $item);
        $item.children(".text").text(item.name);
    }

    show() {
        this.$element.show();
    }

    hide() {
        this.$element.hide();
    }
}
