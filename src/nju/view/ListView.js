import View from "./View";

export default class ListView extends View {
    init() {
        super.init();
        this._items = [];
        this._$liTemplates = [];
        this.addStyleClass("nju-list-view");
    }

    getElementTag() {
        return "ul";
    }

    get items() {
        return this._items;
    }

    set items(value) {
        this.clearItems();
        this.addItems(value)
    }

    getTypeOfItem(item) {
        return 0;
    }

    clearItems() {
        if(this.items.length > 0) {
            this._items.splice(0, this._items.length);
            this.$element.children("li").remove();
        }
    }

    addItems(items) {
        if(items && items.length) {
            items.forEach(item => {
                this.addItem(item)
            })
        }
    }

    addItem(item) {
        this.items.push(item);
        const $li = this.createItem(this.getTypeOfItem(item));
        this.$renderItem(item, $li);
        this.$element.append($li);
    }

    $renderItem(item, $li) {
    }

    createItem(type = 0) {
        if(!this._$liTemplates[type]) {
            return this._$liTemplates[type] = this.$createNewItem(type);
        }
        return this._$liTemplates[type].clone();
    }

    $createNewItem(type = 0) {
        return $(`<li/>`);
    }
}
