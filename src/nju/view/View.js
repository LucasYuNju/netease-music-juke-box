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

    get subviews() {
        return this._subviews;
    }

    addSubview(view, $container = this.$container) {
        if (view instanceof View) {
            if (view.parent) {
                view.$element.removeFromParent();
            }
            view._parent = this;
            this._subviews.push(view);
            // this.$container.append(view.$element);
            view.placeAt($container);
        }
    }

    addSubviews(views, $container = this.$container) {
        if(Array.isArray(views)) {
            views.forEach(view => this.addSubview(view, $container));
        }
    }

    removeAllSubviews(neverUseAgain = false) {
        while (this.subviews.length > 0) {
            this.removeSubview(this.subviews[0], neverUseAgain);
        }
    }

    removeSubview(view, neverUseAgain = false) {
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
            this.parent.removeSubview(this);
        }
    }

    placeAt(target) {
        const $target = $(target);
        $target.append(this.$element);
    }

    $(...args) {
        return this.$element.find(...args);
    }
}
