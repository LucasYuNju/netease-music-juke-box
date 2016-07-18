import View from "./View";

export default class ListView extends View {
    init() {
        super.init();
        this._items = [];
        this._selection = null;
        this._$itemTemplates = [];
        this.addStyleClass("nju-list-view");

        this._initLayout();
        this.$container.on("mousedown", this.getItemElementTag(), this._onclick.bind(this));
    }

    getElementTag() {
        return "ul";
    }

    getItemElementTag() {
        return "li";
    }

    _initLayout() {

    }

    get items() {
        return this._items;
    }

    set items(value) {
        this._items = value;
        this.clearItems(false);
        this.resizeItems(value);

        const $items = this.$container.children(this.getItemElementTag());
        for (let i = 0; i < value.length; i++) {
            this.renderItem(value[i], $items.eq(i));
        }
    }

    get selection() {
        return this._selection;
    }

    set selection(value) {
        this.selectItem(value);
    }

    get selectedId() {
        return this.getIdOfItem(this.selection);
    }

    getTypeOfItem(item) {
        return 0;
    }

    getIdOfItem(item) {
        if (item) {
            return item.id;
        }
        return null;
    }

    clearItems(remove = true) {
        this.selection = null;
        if (this.items.length > 0) {
            if (remove) {
                this._items.splice(0, this._items.length);
                this.$container.children(this.getItemElementTag()).remove();
            }
            else {
                this.$container.children(this.getItemElementTag()).data("item", null);
                this.$container.children(this.getItemElementTag()).removeAttr("id");
            }
        }
    }

    resizeItems(items) {
        const $items = this.$container.children(this.getItemElementTag());
        if (items.length > $items.length) {
            // add $item
            const numToAdd = items.length - $items.length;
            for (let i = 0; i < numToAdd; i++) {
                this.addItem(items[i]);
            }
        }
        else {
            // remove $item
            const numToDel = $items.length - items.length;
            $items.slice($items.length - numToDel).remove();
        }
    }

    addItem(item) {
        // this.items.push(item);
        const $item = this.createItem(this.getTypeOfItem(item));
        // this.renderItem(item, $item);
        this.$container.append($item);
    }

    selectItem(item = null) {
        if (this.selection === item) {
            return;
        }

        if (this.selection !== null) {
            this.$getItem(this.selection).removeClass("selected");
            this._selection = null;
        }
        this._selection = item;

        if (item) {
            const $item = this.$getItem(item);
            $item.addClass("selected");
        }
        this.trigger("selectionchanged");
    }

    renderItem(item, $item) {
        $item.data("item", item);
        $item.attr("id", "i-" + this.getIdOfItem(item))
    }

    createItem(type = 0) {
        if (!this._$itemTemplates[type]) {
            return this._$itemTemplates[type] = this.$createNewItem(type);
        }
        return this._$itemTemplates[type].clone();
    }

    $createNewItem(type = 0) {
        return $(`<${this.getItemElementTag()}/>`);
    }

    $getItem(item) {
        const id = this.getIdOfItem(item)
        return this.$container.children("#i-" + id);
    }

    _onclick(e) {
        const $item = $(e.currentTarget);
        const item = $item.data("item");
        this.trigger("itemclick", {item});
        this.selectItem(item);
    }
}
