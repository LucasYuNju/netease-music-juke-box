import ManagedObject from "../base/ManagedObject";

export default class ViewController extends ManagedObject {
    constructor(id, options = {}) {
        super(id);
        this._view =  this.createView();
        this.applyViewOptions(options);
    }

    get view() {
        return this._view;
    }

    createView(options) {
        return new View();
    }

    applyViewOptions(options = {}) {
        for(let key in options) {
            this.view[key] = options[key];
        }
    }
}
