import ManagedObject from "../base/ManagedObject";

export default class View extends ManagedObject {
    init() {
        super.init();
        this._subviews = [];
        this.$element = $(`<${this.getElementTag()} />`);
        if (this.id !== null) {
            this.$element.attr("id", this.id);
        }
        this.$container = this.$element;
    }

    getElementTag() {
        return "div";
    }

    addStyleClass(...args) {
        this.$element.addClass(...args);
    }

    removeStyleClass(...args) {
        this.$element.removeClass(...args);
    }

    toggleStyleClass(...args) {
        this.$element.toggleClass(...args);
    }

    get subViews() {
        return this._subviews;
    }

    addSubView(view) {
        if (view instanceof View) {
            if (view.parent) {
                view.$element.removeFromParent();
            }
            view._parent = this;
            this._subviews.push(view);
            // this.$container.append(view.$element);
            view.placeAt(this.$container);
        }
    }

    addSubViews(views) {
        if(Array.isArray(views)) {
            views.forEach(view => this.addSubView(view));
        }
    }

    removeAllSubViews(neverUseAgain = false) {
        while (this.subviews.length > 0) {
            this.removeSubView(this.subviews[0], neverUseAgain);
        }
    }

    removeSubView(view, neverUseAgain = false) {
        const idx = this.subviews.indexof(view);
        if(idx !== -1) {
            view._parent = null;
            this.subviews.splice(idx, 1);
            if (neverUseAgain) {
                view.$element.remove();
            }
            else {
                view.$element.detach();
            }
        }
    }

    removeFromParent() {
        if (this.parent) {
            this.parent.removeSubView(this);
        }
    }

    placeAt(target) {
        const $target = $(target);
        $target.append(this.$element);
    }

    $(...args) {
        this.$element.find(...args);
    }
}
